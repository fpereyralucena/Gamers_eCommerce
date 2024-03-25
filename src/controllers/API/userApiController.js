const db = require('../../database/models');

const userApiController = {
    getAllUsers: async (req, res)=>{
        let user = await db.Users.findAll({raw:true});
        if (!user) return res.sendStatus(204);
        user = user.map((obj=>({...obj, detail : req.protocol + "://" + req.get('host') + req.originalUrl + "/" + obj.id })));
        if (user) return res.json((user));

    },
    getUser: async(req, res) => {
       
        let user_id = req.params.id;
        let user = await db.Users.findByPk(user_id);
        if (!user) return res.sendStatus(204);
        if (user) return res.json((user));
    }
}

module.exports = userApiController;