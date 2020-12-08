http -v :4000/notebooks/1 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYwNzQyMDQ2NSwiZXhwIjoxNjA3NDI3NjY1fQ.uXYv5v5YvGC5C_eQuYbMd0qdQIjbtBWZeVkpXWpsuio"

**Available endpoints**

| Method | Path                            | Purpose                                    | required parameters                            | auth |
| ------ | ------------------------------- | ------------------------------------------ | ---------------------------------------------- | ---- |
| POST   | '/signup'                       | Create a new user and get a token          | firstName, lastName, username, email, password | no   |
| POST   | '/login'                        | Get a token with email & password          | username, password                             | no   |
| GET    | '/me'                           | Get information of this user               | none                                           | yes  |
| GET    | '/notebooks'                    | Get all notebooks of all users             | none                                           | no   |
| POST   | '/notebooks/'                   | Create a new notebook to the notebookspage | name, userId, subjectId,                       | yes  |
| GET    | '/notebooks/:notebookId'        | Get a specific notebook with notes by id   | notebookId                                     | no   |
| POST   | '/notebooks/:notebookId/notes'  | Create a new note to a notebook            | notebookId, title, content, imageUrl, type     | yes  |
| DELETE | '/notebooks/:notebookId/notes'  | Delete a note                              | notebookId, noteId                             | yes  |
| PATCH  | '/notebooks/:notebookId/notes'  | Edit a note                                | notebookId, noteId                             | yes  |
| POST   | '/notebooks/subjects'           | Create a new subject                       | name                                           | yes  |
| DELETE | '/notebooks/subjects/subjectId' | delete a subject                           | subjectId                                      | yes  |
