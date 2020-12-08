http -v :4000/notebooks/1 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYwNzQyMDQ2NSwiZXhwIjoxNjA3NDI3NjY1fQ.uXYv5v5YvGC5C_eQuYbMd0qdQIjbtBWZeVkpXWpsuio"

**Available endpoints**

| Method | Path                     | Purpose                                       | required parameters                            | auth |
| ------ | ------------------------ | --------------------------------------------- | ---------------------------------------------- | ---- |
| POST   | '/signup'                | Create a new user and get a token             | firstName, lastName, username, email, password | no   |
| POST   | '/login'                 | Get a token with email & password             | username, password                             | no   |
| GET    | '/me'                    | Get information of this user                  | none                                           | yes  |
| GET    | '/notebooks'             | Get all notebooks of all users                | none                                           | no   |
| GET    | '/notebooks/:notebookId' | Get one notebook with notes by id             | none                                           | no   |
| POST   | '/notebooks/'            | Add a new notebook to the users notebookspage | name, userId, subjectId,                       | yes  |
