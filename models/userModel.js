const mongoose = require('mongoose');

var dateFormat = require('dateformat');

const userSchema = new mongoose.Schema({
    ten: {
        type: String,
        require: true,
    },
    sdt: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        //unique chọn làm khóa chính trong db
        // unique: true,
        lowercase: true,
        validate: [(val) => {}, 'Please enter a valid email'],

    },
    gioiTinh: {
        type: Boolean,
        require: true,
    },
    anhDaiDien: {
        type: String,
        default: '',
    },
    ngaySinh: {
        type: Date,
        default: dateFormat(Date.now(), "yyyy-mm-dd")
    },
    ngayTao: {
        type: Date,
        default: dateFormat(Date.now(), "yyyy-mm-dd")
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        require: true,
    },
    diaChi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address',
        default:''
    }
});
let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset