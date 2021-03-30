import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'
import Account from '../../../models/account'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try{
        const { ten, sdt, email,gioiTinh,anhDaiDien,ngaySinh,password, cf_password } = req.body
        (name,birthday,phone,gender, email, password, cf_password)
        const errMsg = valid(ten,ngaySinh,sdt,gioiTinh,anhDaiDien, email, password, cf_password)
        if(errMsg) return res.status(400).json({err: errMsg})

        const user = await Users.findOne({ email })
        if(user) return res.status(400).json({err: 'This email already exists.'})

        const passwordHash = await bcrypt.hash(password, 12)

        const newAccount = new Account({
            password: passwordHash
        })
        const newUser = new Users({ 
            ten, email,sdt,gioiTinh,anhDaiDien,ngaySinh,ngayTao,newAccount
        })

        await newUser.save()
        res.json({msg: "Register Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}