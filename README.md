# Hafa Adai 🪸🌊

#### Welcome again on my tech learning journey! This week's stop... MongoDB and Mongoose! For this assignment I have developed a backend with lots of routes using JavaScript. Its connected to a MongoDB database that stores Packing Lists for trips. My collecstions are Users, Clothes Lists and Essentials List and I created some seed data for each collection that can be populated in MongoDB using their seed routes. Each user can have multiple lists of each kind for all their different trips. I created routes to do all kinds of searches. There's a table below. Enjoy list making!

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
    - separte folders for
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). ✅
- Commit frequently to the git repository. ✅
- Include a README file that contains a description of your application. ✅
- Level of effort displayed in creativity and user experience. ✅

### ROUTE Referance

|  VERB  |    PATH                  |  	DESCRIPTION                                | 
|--------|--------------------------|----------------------------------------------|
|  POST  | /api/user                | Create new User and add it to the DB         |
|    GET | /api/user                | Read All Users                               |
|    PUT | /api/user/:id            | Update a User                                |
| DELETE | /api/user/:id            | Delete a User                                |
|    GET | /api/user/:id            | Read one User by id                          |
|    GET | /api/user/:id/clothes    | Read all Clothes Lists for one user          |
|    GET | /api/user/:id/essentials | Read all Essentials Lists for one user       |
|  POST  | /api/clothes             | Create new Clothes List and add it to the DB |
|    GET | /api/clothes             | Read All Clothes Lists                       |
|    PUT | /api/clothes/:id         | Update a Clothes List                        |
| DELETE | /api/clothes/:id         | Delete a Clothes List                        |
|    GET | /api/clothes/:id         | Read one Clothes List by id                  |
|  POST  | /api/essentials          | Create new Clothes List and add it to the DB |
|    GET | /api/essentials          | Read All Essentials Lists                    |
|    PUT | /api/essentials/:id      | Update a Essentials List                     |
| DELETE | /api/essentials/:id      | Delete a Essentials List                     |
|    GET | /api/essentials/:id      | Read one Essentials List by id               |

### Acknowledgemts
- Seed data aquired from Chat GPT