function getTaskId() {
    const highestId = 0;
    for (task in tasks) {
        if (task.id > highestId) {
            highestId = task.id;
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
