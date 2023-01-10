# Smart ToDo List

Revamped version of Lighthouse Labs midterm project created by Jacquiiii, TonyEng10, and TamBam55 and built using [node-skeleton](https://github.com/lighthouse-labs/node-skeleton).

## Description
When you are recommended something it's not always easy to jot it down for later in an organized fashion. Adding the item to your phone or computer ends up taking time and opening up the right app is only part of the problem. You then have to locate the right list ("Movies to watch", "Books to read", etc.) to add to. And if you do get it in to the right list, you don't have much more context about it. This delay and lack of additional information acts as a huge deterrent.

The solution? A smart, auto-categorizing todo list app which sorts the task into 4 categories: Watch, Read, Eat, and Buy. The user simply has to add the name of the thing, and it gets put into the correct list.

 The majority of this single page application was created via group programming, however each of us was the star of the show for certain aspects: Tony - routing, Tammy - css/databases, Jacqui - api integration.


## Getting Started

1. Fork and clone a copy of this repo to your local machine
3. Create a .env file with your correct local information:
    - DB_HOST=localhost
    - DB_USER=enter user
    - DB_PASS=enter password
    - DB_NAME=enter name
    - DB_PORT=enter port
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
    - Check the db folder to see what gets created and seeded in the SDB
7. Set up API:
    - Set up a Google Developer account, then follow [these steps](https://cloud.google.com/natural-language/docs/setup) to enable the API and set up a service account with an API key
    - Create a folder named keys in your project and add it to your git ignore file (if not there already)
    - Locate the json file with the key information on your local computer and move it into the keys folder
    - Run the following command in your terminal: `export GOOGLE_APPLICATION_CREDENTIALS="./keys/name of json file"`
      - Note: The API set up only needs to be done once, however this command needs to be run everytime your computer is restarted
8. Run the server: `npm run local`.
    - Note: nodemon is used, so you should not have to restart your server
9. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds
  - It runs through each of the files, in order, and executes them against the database
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Chalk
- @google-cloud/language
- Cookie-parser
- Dotenv
- EJS
- Express
- Morgan
- Sass

## Current features

- Users can add tasks, delete tasks and change the category of a task
- Tasks are auto categorized
- Partial login functionality (only email is validated)

## Final Product

!["Main view"](https://github.com/Jacquiiii/TJT-Midterm/blob/master/docs/Main%20page.png)
!["Login"](https://github.com/Jacquiiii/TJT-Midterm/blob/master/docs/Login.png)
!["Change Category"](https://github.com/Jacquiiii/TJT-Midterm/blob/master/docs/Change%20category.png)
!["Completed task"](https://github.com/Jacquiiii/TJT-Midterm/blob/master/docs/Completed%20tasks.png)

## Future enhancements

- Signup functionality
- Complete login functionality, including the ability to only display tasks created by signed in user
- Edit button functionality
- Filter options for task categories
- Links to each task (e.g. link to McDonalds to eat)

