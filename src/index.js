const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');

// 1. Read credentials from environment variables or CLI arguments
function getCredentials() {
  const args = process.argv.slice(2);
  let appId = process.env.ALGOLIA_APP_ID;
  let adminKey = process.env.ALGOLIA_ADMIN_KEY;
  let indexName = process.env.ALGOLIA_INDEX_NAME || 'products';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--app-id' && args[i + 1]) appId = args[++i];
    if (args[i] === '--admin-key' && args[i + 1]) adminKey = args[++i];
    if (args[i] === '--index-name' && args[i + 1]) indexName = args[++i];
  }

  if (!appId || !adminKey) {
    console.error(
      'Error: Algolia credentials required.\n\n' +
      'Set environment variables:\n' +
      '  ALGOLIA_APP_ID=YourAppID ALGOLIA_ADMIN_KEY=YourAdminKey node src/index.js\n\n' +
      'Or use CLI arguments:\n' +
      '  node src/index.js --app-id YourAppID --admin-key YourAdminKey\n'
    );
    process.exit(1);
  }

  return { appId, adminKey, indexName };
}

// 2. Configure index settings
async function configureIndex(client, indexName) {
  console.log(`Configuring index "${indexName}" settings...`);

  await client.setSettings({
    indexName,
    indexSettings: {
      // Searchable attributes in priority order
      searchableAttributes: [
        'name',
        'brand',
        'categories',
        'type',
        'description'
      ],

      // Attributes displayed in results
      attributesToRetrieve: [
        'name',
        'brand',
        'categories',
        'type',
        'price',
        'price_range',
        'image',
        'url',
        'free_shipping',
        'rating',
        'description'
      ],

      // Attributes for highlighting in results
      attributesToHighlight: ['name', 'brand', 'description'],

      // Faceting for filters
      attributesForFaceting: [
        'searchable(brand)',
        'searchable(categories)',
        'type',
        'price_range',
        'free_shipping',
        'rating'
      ],

      // Custom ranking: prioritize popular and highly-rated products
      customRanking: [
        'desc(popularity)',
        'desc(rating)'
      ],

      // Snippet configuration for long descriptions
      attributesToSnippet: ['description:30'],

      // Highlight tags
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>',

      // Pagination
      hitsPerPage: 16,

      // Typo tolerance
      minWordSizefor1Typo: 4,
      minWordSizefor2Typos: 8
    }
  });

  console.log('Index settings configured successfully.');
}

// 3. Push product records to Algolia
async function pushRecords(client, indexName) {
  const dataPath = path.join(__dirname, '..', 'data', 'products.json');
  console.log(`Reading product data from ${dataPath}...`);

  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const products = JSON.parse(rawData);
  console.log(`Found ${products.length} products.`);

  // Push records in batches of 1000
  const BATCH_SIZE = 1000;
  for (let i = 0; i < products.length; i += BATCH_SIZE) {
    const batch = products.slice(i, i + BATCH_SIZE);
    await client.saveObjects({ indexName, objects: batch });
    console.log(`Uploaded batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(products.length / BATCH_SIZE)} (${batch.length} records)`);
  }

  console.log(`All ${products.length} records pushed successfully.`);
}

// 4. Create replica indices for sorting by price
async function createReplicas(client, indexName) {
  const priceAsc = `${indexName}_price_asc`;
  const priceDesc = `${indexName}_price_desc`;

  console.log(`Creating replica indices: ${priceAsc}, ${priceDesc}...`);

  // Configure the primary index to use standard replicas
  await client.setSettings({
    indexName,
    indexSettings: {
      replicas: [priceAsc, priceDesc]
    }
  });

  // Configure ascending price replica
  await client.setSettings({
    indexName: priceAsc,
    indexSettings: {
      ranking: [
        'asc(price)',
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
        'custom'
      ]
    }
  });

  // Configure descending price replica
  await client.setSettings({
    indexName: priceDesc,
    indexSettings: {
      ranking: [
        'desc(price)',
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
        'custom'
      ]
    }
  });

  console.log('Replica indices created and configured.');
}

async function main() {
  const { appId, adminKey, indexName } = getCredentials();

  console.log(`\nAlgolia Indexing Script`);
  console.log(`======================`);
  console.log(`App ID:     ${appId}`);
  console.log(`Index Name: ${indexName}\n`);

  const client = algoliasearch(appId, adminKey);

  await configureIndex(client, indexName);
  await pushRecords(client, indexName);
  await createReplicas(client, indexName);

  console.log('\nDone! Your index is ready to use.');
  console.log(`View it at: https://dashboard.algolia.com/apps/${appId}/explorer/browse/${indexName}\n`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
