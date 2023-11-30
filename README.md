# Book Search Engine Starter Code

 ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributions/Resources](#contributions)
 - [Testing](#testing)
 - [Questions](#questions)

 ## Description
For week 21 our student challenge was to take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end. Although I wasn't able to successfully finish I plan on returning to fix it, but in the mean time its better to submit something than nothing.
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 

 ## Installation
  Installing this application is simple. Just simply visit my Github and look for this repo. You have a choice of either cloning it or downloading as a zip and running on your personal station yourself. After installing please open the client and server directory of the repo, click open terminal, and run the command.
```
npm i
```
And after you can run this command to start the server and then this command to run the application locally. 
```
node server / npm run dev
```
 ## Usage
The main usage of this challenge was to demonstrate my ability to utilize all my resources and knowledge to implement GraphQL API to an application and using queries and mutations to fetch and modify data, replacing the existing RESTful API.

 ## Contributions
 For this project I used the student mini project for week 21 to help give me a sense of direction on where to start. I followed the file structure guide to help me when I didn't know how to structure it.<br />
 I would also like to credit the module itself as it helped me set up the models and showing me the exact things required for each model and mutations/query.<br />


 ## Testing
To test my application, you must first download my code from my github, and launch it using your preffered coding application. Open the terminal of both the client/server directory and run the command npm i to install all dependencies. You will then run the command node server to start the graphql server and then un client run the npm run dev to start the application in your local host.

 ## Questions

 If you have any questions feel free to visit my [GitHub](https://github.com/Pixls112)!