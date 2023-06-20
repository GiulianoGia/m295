function getTaskId(tasks) {
    let highestId = 0;
    for (let id in tasks) {
        if (highestId < tasks[id].id) {
            highestId = tasks[id].id;
        }
    }
    return highestId + 1;
}

function getTaskWithId(list, id) {
    const task = list.find((task) => task.id === id);
    return task;
}

module.exports = {
    getTaskId,
    getTaskWithId,
};
