const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({

    phanQuyen: {
        type: String,

        default: 'user',
    },
    trangThai: {
        type: String,

        default: 'false',
    },
    password:{
        type : String,
        required: true,
    }
});
let Dataset = mongoose.models.account || mongoose.model('account', accountSchema)
export default Dataset