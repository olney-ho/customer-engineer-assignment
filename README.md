# Customer Engineering Assignment

This assignment mimics the technical work you might perform as a customer-facing engineer at Algolia. It gives us an understanding of your skills in:

- Problem Solving
- Communication
- Coding

This assignment has two parts: 
1. Answering sample customer questions
2. Implementing a demo of Algolia on top of existing code

You aren't required to complete this in a certain amount of time, but we expect most candidates will take around six hours to complete it depending on familiarity with Algolia. Please make a note of roughly how long each part of the assignment took to research and complete.

You can consult the scoring rubric at the end of this README to know how we'll assess your submission.

*Important*: Algolia will never reuse your work. This assignment is for evaluation purposes only.

## 1. Sample customer questions

The questions in the questions directory are representative of the types of questions we often see at Algolia. Please answer each question as if you were replying to the customer, and feel free to add internal comments or notes to explain your thinking.  Do your best to include a technical solution or suggestion for each question, rather than suggesting to jump on a call.

Answer the questions by directly editing the [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) file for each question. You are welcome to use any formatting you would in a real email—for example, links, bold text, images, etc.

## 2. Implementation

Our customer, Spencer and Williams, wants to implement a **_search experience_** in their provided codebase. They've provided the raw product data and have asked for us to create a demo using this data.

**Your goal is to:**
1. Create an account on Algolia.
2. Create an indexing script that will generate an Algolia index out of the data, on your own application; in other words a piece of code that uses one of Algolia's official API clients to push the records in [data/products.json](/data/products.json) to Algolia.
3. Configure the index relevancy as best as you can so the results are relevant and could be used on a real website. You can find guidance on relevancy [here](https://www.algolia.com/doc/guides/managing-results/relevance-overview/).
4. Create a front end demo to search the index. Use [InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/) to make a search experience with the data (of course you are free to use any of the resources in our documentation for this).

The front and search should have the following features:
- It should have search box and list of search results
- It should show at least a thumbnail, title and price in the search results
- It should have at least two types of filters/facet filters
               
You can add extra features and widgets as you see fit to create a good search experience

Please share your code in the src directory provided with instructions for how to view it.

Depending on your front-end experience, this may be a challenging task and you may not be able to fully complete it. We're interested in seeing what you can do, so please send in your assignment even if you aren't able to complete it!

### Getting started

First, you'll need to sign up for an Algolia account at https://www.algolia.com/users/sign_up.  
  
You can find the product dataset in the data directory of this repository. Push this data to Algolia in your own application and use it to build your sample implementation.
  
# Delivering your assignment

Reply to the person that sent you the assignment with your modified files:
1. **Answers** (and notes if any) to customer questions
2. An **indexing script** for both records and settings
3. A search demo, including a way for us to **see your demo in a browser**; you can host the front-end on [GitHub Pages](https://pages.github.com/) or another tool we can access. 

Note: When pushing an update to Github pages you may encounter an error where the site will not update your CSS changes. To resolve this error you can increment the CSS reference in your .html like this: <link rel="stylesheet" href="styles.css?v=x"> Incrementing x up by one for each new push to make sure the changes are applied. IE v=1, v=2, etc

You can create a local GIT repository and send it back as a ZIP file OR share a repository link directly as long as you've made it a [private repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-private). If you're using a private repository, please make sure to grant access to the last person you interviewed with. 

Upload via Greenhouse: The email you were sent with the link to the assignment should also contain a link where you can upload your zip file. This is the best method to submit your assignment. You should include the following information in the notes field.

- URL for viewing the demo
- The application ID and index name(s) you created—please grant our team access for at least one month using this [link](https://www.algolia.com/account/support).
- Any explanation you feel is necessary to understand your thinking, reasoning, and the challenges you faced
- The approximate time in hours it took you to complete this assignment
- Any feedback on the assignment itself

If sending a ZIP file via email, keep in mind that many email clients won't allow you to attach a ZIP file directly, so you can use any Google Drive or Dropbox to save your file and send us a link to download it. Make sure to include the above information in your email.

## Notes

- Your indexing script can be made of one or multiple files, can be written in any programming language you are the most comfortable with, and can use any existing module you like. We should be able to run your indexing script ourselves on our accounts. Include instructions on how to run the script.
- Be careful not to publish your Algolia admin API key in the final indexing script. Write it so that your indexing script reads your Algolia credentials from a parameter passed via the command line or from an environment variable, not credentials stored in the code.
- Your search-only API key and application ID can (and should if you want us to see a demo) live directly inside your project.

If you have any questions, please don't hesitate to let us know!

## Scoring Rubric

### Customer Questions

| Did the candidate: | Yes | No |
| :------------- | :------------- | :------------- |
| Answer the questions correctly? | | |
| Answer in a succinct, clear manner? | | |
| Have minimal spelling, grammar, or formatting mistakes? | | |
| Employ a friendly, helpful tone? | | | |

### Implementation
  
| Did the candidate: | Yes | No |
| :------------- | :------------- | :------------- |
| Ask for clarification when necessary? | | |
| Follow the instructions of the assignment? | | |
| Write code that follows best-practices? | | |
| Avoid over-engineering? | | |
| Demonstrate understanding of the code they wrote? | | |
| Demonstrate good code and process organization? | | |
| Craft a search experience that is simple to understand? | | |
| Go beyond what was asked of them? | | | |

### Overall Impressions

| Rate the candidate (1 - 5) in each of the following categories | Rating  |
| :------------- | :------------- | 
| Problem solving skills | |
| Communication skills | |
| Technical aptitude | |

