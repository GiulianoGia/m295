const { getTaskId, getTaskWithId } = require('../helpers/taskHelper');
const tasks = require('../mocks/data');

const getAllTasks = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(tasks);
};

const createTask = (req, res) => {
    const newTask = req.body;
    if (newTask && newTask.title) {
        const task = {
            id: getTaskId(tasks),
            title: newTask.title,
            created_at: new Date(),
            finished_at: null,
        };
        tasks.push(task);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send({ message: 'New task created.', data: task });
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(406).send({ error: "Task isn't valid!" });
    }
};

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        const task = getTaskWithId(tasks, id);
        if (task) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({ message: 'Task found.', data: task });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(404).send({ error: 'Task not found!' });
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send({ error: "id isn't given!" });
    }
};

const replaceTask = (req, res) => {
    const id = parseInt(req.params.id);
    const newTask = req.body;
    const task = getTaskWithId(tasks, id);
    if (task) {
        if (newTask.title) {
            const replaceTask = {
                id: task.id,
                title: newTask.title,
                created_at: new Date(),
                finished_at: null,
            };
            tasks[id - 1] = replaceTask;
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({
                message: 'Task replaced.',
                data: replaceTask,
            });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(400).send({ error: "Task isn't valid!" });
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send({ error: 'Task not found!' });
    }
};

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        const task = getTaskWithId(tasks, id);
        if (task) {
            tasks.splice(id - 1, 1);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({ message: 'Task deleted.', data: task });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(404).send({ error: 'Task not found!' });
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send({ error: "id isn't given!" });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    replaceTask,
    deleteTask,
};
