const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");
const wilder = require("./wilder");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource.getRepository(Skill).save(req.body);
            res.send("Created skill");
        } catch (error) {
            res.send("Error while creating skill");
        }
    },
    findAll: async (req, res) => {
        try {
            const skills = await dataSource.getRepository(Skill).find();
            res.send(skills);
        } catch (error) {
            res.send("Error while fetching skill");
        }
    },
    delete: async (req, res) => {
        try {
            await dataSource.getRepository(Skill).delete(req.params.id);
            res.send("Deleted skill");
        } catch (error) {
            res.send("Error while deleting skill");
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const updatedFields = req.body;
        try {
            await dataSource.getRepository(Skill).update(id, updatedFields);
            res.send("Updated skill");
        } catch (error) {
            res.send("Error while updating skill");
        }
    }
};
