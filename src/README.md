# Customer Engineering Assignment - Olney Ho

## TO VIEW:

Double click on index.html under /src folder to view directly.
In IDE (like IntelliJ) you can also preview as well.

## FEATURES:

- Full-text search with typo tolerance and instant results
- Product cards with thumbnail, title, brand, price, rating, and free shipping badge
- **5 filter types:** Category, Brand, Price Range, Rating, and Free Shipping toggle
- Sort by relevance, price low-to-high, or price high-to-low
- Active filter pills with one-click removal
- Responsive grid layout
- Search within facets for Category and Brand filters


## THOUGHTS


**For the customer questions:** I tried to put myself in the shoes of someone actually receiving these emails. Each one needed a different approach. Some were pure technical debugging (like the separatorsToIndex issue, which I tracked down through the API reference and realized it's an index setting, not a search parameter).

Others were more about soft skills, like Marissa's dashboard complaint, where the real job is to make her feel heard while still giving her something actionable. For Stan's playlist question, I went through the security docs and landed on Secured API Keys as the right fit since it solves the exact vulnerability he described.

For the implementation, I kept it simple on purpose. The indexing script reads credentials from environment variables or CLI flags so nothing sensitive ends up in the code. I set up searchable attributes in priority order (product name first, then brand, then categories, etc.) and used popularity and rating for custom ranking since those felt like the most natural signals for an ecommerce catalog. 

On the frontend I used vanilla InstantSearch.js from the CDN rather than spinning up a full React app because it's easier to review, easier to deploy, and honestly just the right tool for a standalone demo. I added five filter types (category, brand, price range, rating, free shipping toggle) even though only two were required, because a real search experience needs more than the bare minimum to feel usable.
The biggest challenge was honestly just making sure I understood the v5 API client correctly. The syntax changed quite a bit from v4 (everything is on the client instance now instead of on index objects), and some of the docs still mix v4 and v5 examples, so I had to cross reference a few sources to make sure my code was correct.


**Time to complete:** 9 hours total. About 2.5 hours on the customer questions (reading docs, drafting, revising), about 5 hours on the implementation (indexing script, relevancy config, frontend, testing), and the rest on cleanup and documentation.



**Feedback on the assignment:** I thought it was well designed. The customer questions do a good job of testing different skills in one exercise. Some are technical, some are diplomatic, and some are both. The implementation portion is scoped well too. It's open ended enough to show creativity but structured enough that you know when you're done. One small thing: the link to the InstantSearch template in question 4 pointed to a CodeSandbox that was tricky to inspect from outside the sandbox environment, so I had to rely more on the deployed Netlify URL and general debugging instincts for that one.

