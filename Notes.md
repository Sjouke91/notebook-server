http -v :4000/notebooks/1 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwODQ2NjIxOSwiZXhwIjoxNjA4NDczNDE5fQ.BCE52-rQduhKb8EbPd8rgNVB-01dEeU0hSNhZH-PD2A"

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
