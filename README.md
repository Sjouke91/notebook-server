# Hi there, thank you for visiting my FITTRACK project!

## What this app is about

Notebooks is an app made to support the future students of the codaisseur accademy. With this app we've created a central place to save, read and share notes regarding the topics thaught in class. Our goal was to make an app that we wished we had during the course, an app that would have made our study process a little easier. Allthough there is a lot that could be improved I think we have succeeded in the initial goal and finished a very complete application.

Take a look at [Notebooks](https://codebooks.netlify.app) 

This project is made during the Codaisseur code academy group project week. In a timeframe of one week we've made both the client and a server.

- Notebooks [Front End](https://github.com/Sjouke91/notebook-client)
- Notebooks [Back End](https://github.com/Sjouke91/notebook-server)

**Available endpoints**

| Method | Path                                   | Purpose                                     | required parameters                            | auth |
| ------ | -------------------------------------- | ------------------------------------------- | ---------------------------------------------- | ---- |
| POST   | '/signup'                              | Create a new user and get a token           | firstName, lastName, username, email, password | no   |
| POST   | '/login'                               | Get a token with email & password           | username, password                             | no   |
| GET    | '/me'                                  | Get information of this user                | none                                           | yes  |
| GET    | '/notebooks'                           | Get all notebooks of all users              | none                                           | no   |
| POST   | '/notebooks'                           | Create a new notebook to the notebookpage   | name, userId, subjectId,                       | yes  |
| GET    | '/notebooks/:notebookId'               | Get a specific notebook with notes by id    | notebookId                                     | no   |
| DELETE | '/notebooks/:notebookId'               | Delete a specific notebook with notes by id | notebookId                                     | yes  |
| POST   | '/notebooks/:notebookId/notes'         | Create a new note to a notebook             | notebookId, title, content, imageUrl, type     | yes  |
| DELETE | '/notebooks/:notebookId/notes'         | Delete a note                               | notebookId, noteId                             | yes  |
| PATCH  | '/notebooks/:notebookId/notes/:noteId' | Edit a note                                 | the things to update                           | yes  |
| GET    | '/subjects'                            | Get all subject                             | none                                           | no   |
| POST   | '/subjects'                            | Create a new subject                        | name                                           | yes  |
| DELETE | '/subjects/subjectId'                  | delete a subject                            | subjectId                                      | yes  |
