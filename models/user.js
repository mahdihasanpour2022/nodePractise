const { Schema , model } = require('mongoose');
const userScema = new Schema({
    firstName : {type : String , require : true , default : 'mehdi'},
    lastName : {type : String , require : true , default : 'hasanpour pishfarz'},
    age : {type : Number },
    email : {type : Number , require : true , default : '----@gmail.com'},
},{timestamps: true});

const userModel = model('user', userScema);
module.exports = {userModel};

