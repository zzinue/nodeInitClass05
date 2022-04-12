const mongoose = require('mongoose');
const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(
            "mongodb+srv://zzinue:belkerleon1@cluster0.q8dy9.mongodb.net/kodemiaStore?retryWrites=true&w=majority", { useNewUrlParser: true }
        )

        const db = mongoose.connection;
        db.on('open', () => {
                console.log('sucessfully connected to mongodb');
                resolve(mongoose);
            }),
            db.on('error', (err) => {
                console.log('error connecting to mongodb', err);
                reject(err);
            })
    })
}
module.exports = { connect };