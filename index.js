const express = require('express');
const {
    getAllTasks,
    createTask,
    getTaskById,
    replaceTask,
    deleteTask,
} = require('./controllers/tasks');
const {
    loginUser,
    verifySession,
    deleteSession,
} = require('./controllers/auth');
const app = express();
const port = 3000;
var session = require('express-session');
const genuuid = require('uuid').v4;

app.use(
    session({
        name: 'session',
        genid: function () {
            return genuuid();
        },
        secret: 'thisisasecretforthemodule295',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, expires: 6000000 },
    }),
);
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    if (req.session.authenticated || req.path === '/login') {
        next();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(401).send({ error: 'Not authenticated!' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// todos
app.get('/tasks', getAllTasks);
app.post('/tasks', createTask);
app.get('/tasks/:id', getTaskById);
app.put('/tasks/:id', replaceTask);
app.delete('/tasks/:id', deleteTask);

// authentication
app.post('/login', loginUser);
app.get('/verify', verifySession);
app.delete('/logout', deleteSession);

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});
