# Hafa Adai 🪸🌊

#### Welcome again on my tech learning journey! This week's stop... MongoDB and Mongoose! For this assignment I have developed a backend with lots of routes using JavaScript. Its connected to a MongoDB database that stores Packing Lists for trips. My collections are Users, Clothes and Essentials. I created some seed data for each collection that can be populated in MongoDB using their seed routes. Each user can have multiple lists of each kind for all their different trips. I created routes so you can CRUD to your hearts content. There's a table below of all the possiblities. Enjoy list making and searching!

### OBJECTIVES:

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

### REQUIREMENTS:

- Use at least three different data collections within the database (such as users, posts, or comments) ✅
  - User, Clothes, Essentials
- Utilize reasonable data modeling practices. ✅
  - used models are functional and practical for all 3 collections
- Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. ✅
  - Lots of GET routes, especially in userRoutes
- Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. ✅
  - POST routes for all 3 collections
- Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. ✅
  - PATCH routes for all 3 collections
- Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. ✅
  - DELETE routes for all 3 collections
- Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. ✅
  - indexing in userSchema
- Include sensible MongoDB data validation rules for at least one data collection. ✅
  - validation in userSchema for tripDate and in essentialsSchema for expirationDate
- Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection. ✅
  - seed data for all 3 collections
- Utilize reasonable code organization practices. ✅
  - I separate folders for routes, utilities, middleware. I could have modularized my seed routes or I could have separated my route logic, or combined my seed data into one file but I think this is more readable.
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). ✅
  - everything works! every route, error message, and validation have been tested
- Commit frequently to the git repository. ✅.
  - always
- Include a README file that contains a description of your application. ✅
  - Done. But nobody is going to read it anyway 🤣
- Level of effort displayed in creativity and user experience. ✅
  - So many routes users won't know what to with themselves

### ROUTE Referance

| VERB   | PATH                     | DESCRIPTION                                  |
| ------ | ------------------------ | -------------------------------------------- |
| POST   | /api/user                | Create new User and add it to the DB         |
| GET    | /api/user                | Read All Users                               |
| PUT    | /api/user/:id            | Update a User                                |
| DELETE | /api/user/:id            | Delete a User                                |
| GET    | /api/user/:id            | Read one User by id                          |
| GET    | /api/user/:id/clothes    | Read all Clothes Lists for one user          |
| GET    | /api/user/:id/essentials | Read all Essentials Lists for one user       |
| POST   | /api/clothes             | Create new Clothes List and add it to the DB |
| GET    | /api/clothes             | Read All Clothes Lists                       |
| PUT    | /api/clothes/:id         | Update a Clothes List                        |
| DELETE | /api/clothes/:id         | Delete a Clothes List                        |
| GET    | /api/clothes/:id         | Read one Clothes List by id                  |
| POST   | /api/essentials          | Create new Clothes List and add it to the DB |
| GET    | /api/essentials          | Read All Essentials Lists                    |
| PUT    | /api/essentials/:id      | Update a Essentials List                     |
| DELETE | /api/essentials/:id      | Delete a Essentials List                     |
| GET    | /api/essentials/:id      | Read one Essentials List by id               |

### Acknowledgemts

- Seed data generated using Chat GPT
