const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource.getRepository(Wilder).save(req.body);
            res.send("Created wilder");
        } catch (error) {
            res.send("Error while creating wilder");
        }
    },
    findAll: async (req, res) => {
        try {
            const wilders = await dataSource.getRepository(Wilder).find();
            res.send(wilders);
        } catch (error) {
            res.send("Error while fetching wilders");
        }
    },
    delete: async (req, res) => {
        try {
            await dataSource.getRepository(Wilder).delete(req.params.id);
            res.send("Deleted wilder");
        } catch (error) {
            res.send("Error while deleting wilder");
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const updatedFields = req.body;
        try {
            await dataSource.getRepository(Wilder).update(id, updatedFields);
            res.send("Updated wilder");
        } catch (error) {
            res.send("Error while updating wilder");
        }
    }
};
