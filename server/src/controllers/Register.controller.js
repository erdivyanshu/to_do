import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constants.js";
import bcrypt from 'bcrypt';

const Register=async(req,res)=>{

    const errors=validationResult(req);

    if(errors.isEmpty()){
        //take out all the data
        const {
            username,
            password,
            email,
            name
        }=req.body;
        //password hashing
        //salt create

        const salt=await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(password,salt);

        password=hashPassword;

        //database save

    }

    res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Validation Error",errors.mapped()));
}

export default Register;