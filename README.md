# INST377 Final Project
Showcasing nutrition information about fruit where otherwise, information about them is all over the internet and unorganized. We are trying to solve this problem and organize all the information into one app.

# Group Members
- Aayush Nepal
- Taylor Tran
- Alex Rovito


# Target Browsers and Audience
- Google Chrome Desktop Browser (as tested)
- Health-conscious people
- People looking to become healthier
- Nutritionists
- People who need to be on a special diet 
- Supplement companies
- Investors

# Our solution
Search about fruit, would showcase the details about a specific fruit and show nutrition information.

# Our API
https://www.fruityvice.com/api/

We will be using fruityvice. It shows data about fruit all in one place, things such as the amount of carbohydrates, protein, fat, calories, even the genetic family, and more. We will use this to populate our app with fruit names and use GET methods to pull information from the API when a user needs to learn more about a particular fruit. A website with a search engine where you can search any fruit, includes a submission form request to add a new fruit or an exotic fruit that may not be in the search engine already. We can consider a search engine where the search query is checked within the API. If it’s listed, it will direct the user there. Otherwise, it will direct the user to a request a new fruit.

# Our Proposal
Our proposed solution will help people make healthier food choices, targeting health-conscious people, people looking to become healthier, nutritionists, and people who need to be on a special diet. Convenient access to vital information encourages a balanced diet and will generally help promote a healthier well-being. By showcasing the vitamins, minerals, and antioxidants in fruits, it can educate users on the overall health benefits. This app supports weight management and fitness goals. This app will contribute to a healthier society. 


# User Manual
Video demonstration: https://youtu.be/U7bMQBT1N2s
- Type a fruit name into the top search box, hit `enter`, or click `Lookup this fruit!`
- For missing fruits, red text will appear.
- To request a fruit to be added to the database, type it in the bottom boxes, as well as a username and a date.
- This will populate the external database and show it in a table on the webpage.
- Clicking the top navigation tabs will take you around the website. This means the home page, about page, or documentation page.


# Developer Manual
- Navigate to the project folder using the terminal
- Run `npm install express @supabase/supabase-js cors` in the directory
- Run `node server.js` in the directory
- Navigate to `http://localhost:3000/`
- There are no tests for our software, other than typing a fruit and seeing the description pop up.
- API:
- `app.get('/style.css')` Sends the stylesheet to the website
- `app.get('/app.jsx')` Sends our javascript (`.jsx`) to the website
- `app.get('/')` Sends the home page to the website
- `app.get('/home.html')` Alternative to sending home page since above one was giving an error
- `app.get('/about.html')` Sends the about page to the website
- `app.get('/documentation.html')` Sends the documentation page to the website
- `app.post('/api/addEntry')` Allows the user to add an input to our database
- `app.get('/api/getData')` Loads the database into a table
- Libraries used: ReactJS, Supabase, Node.js, Express, BodyParser, CORS
Bugs and Roadmap:
- We have not found any bugs during development and the app works as designed.
- Future development could include use of another API to take the fruit requests and actually load information for them instead of only storing them in a database (as like this project does for the purpose of an external database requirement)

# Technology Stack
-  HTML
-  CSS
-  Javascript
  - React library
  - Supabase Connection

# Extra Credit
- Used React for the home page
- Chose fonts and colors that compliment one another to make a strong user experience
- Added some hover elements to buttons

