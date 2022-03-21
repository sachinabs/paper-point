const controllerRepo = require('./repo/controller.repo')
const allRepo = async(req, res) => {
    try {
        const result = await controllerRepo.getAllRepo();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
const userSignup = async(req, res) => {
    try {
        const result = await controllerRepo.getSignupDetails(req, res);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
const createNewTask = async(req,res) => {
    try {
        const result = await controllerRepo.newTaskDetails(req, res);
        res.status(200).send(result);
         } catch (error) {
        res.status(500).send(error);       
    }
}


module.exports = {
    allRepo,
    userSignup,
    createNewTask
}