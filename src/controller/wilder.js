const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

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
    },
    addSkill: async (req, res) => {
        try {
            const wilderToUpdate = await dataSource 
                .getRepository(Wilder)
                .findOneBy({ name: req.body.wilderName });
            console.log(wilderToUpdate);
            const skillToAdd = await dataSource
                .getRepository(Skill)
                .findOneBy({ name: req.body.skillName});
            wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
            await dataSource.getRepository(Wilder).save(wilderToUpdate);
            res.send("Skill added to wilder");
        } catch (err) {
            console.log(err);
            res.send("error while adding skill to wilder")
        }
    }
};
