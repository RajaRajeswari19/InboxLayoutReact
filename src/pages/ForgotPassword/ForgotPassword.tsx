import { useState } from "react";

export default function ForgotPassword(){

const [emailOrPhone,setEmailOrPhone] = useState("");

        return(
        <>
          <h5>Forgot Password</h5>
          <label>Enter the Email/PhoneNo</label>
          <input type="text" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
        </>
    );

}
