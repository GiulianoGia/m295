# Module 295

## Project setup

```bash
npm install
```

runs the app on the port 3000

```bash
node index.js
```

lints and fixes files

```bash
npm run lint
```

## Project description

This is the project for the 'Leistungsbeurteilung B' in the Module 259. The Project stores and gets tasks. Before the data can be retreived, the endpoint /login has to be called. The credentials are: <strong>password=m295</strong> and any valid email
The tests have been written in postman and not with jest or mocha.

## Endpoints

### GET/tasks

get all the tasks

### GET/tasks/:id

get a task by id

### POST/tasks

create a new task

### PUT/tasks/:id

update a task by id

### DELETE/tasks/:id

delete a task by id

<br/>

### POST/login

login with email and password to get the session

### Delete/logout

deletes the session

### GET/verify

verifies the session

