const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
    create: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .save(req.body)
            .then(()=> {
                res.send("Created wilder");
            })
            .catch(()=>{
                res.send("Error while creating wilder");
            })
    },
    findAll: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .find()
            .then((wilders)=> {
                res.send(wilders);
            })
            .catch(()=>{
                res.send("Error while fetching wilders");
            })
    },
    delete: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .delete(req.params.id)
            .then(()=> {
                res.send("Deleted wilder");
            })
            .catch(()=>{
                res.send("Error while deleting wilder");
            })
    },
    update: (req, res) => {
        const id = req.params.id;
        const updatedFields = req.body;
        dataSource
            .getRepository(Wilder)
            .update(id, updatedFields)
            .then(()=> {
                res.send("Updated wilder");
            })
            .catch(()=>{
                res.send("Error while updating wilder");
            })
    }
};