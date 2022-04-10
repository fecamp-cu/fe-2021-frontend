import { EmailChecker } from "./EmailChecker";
import { PasswordChecker } from "./PasswordChecker";

export const InputChecker = (inputType:string,text:string)=>{
    if (inputType === "password"){
        return PasswordChecker(text,text);
    }
    else if (inputType === "email"){
        return EmailChecker(text);
    }
    else{
        return true;
    }
}