import { useState } from "react";
import "./ForgotPassword.css"

export default function ForgotPassword() {

  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleOtp = () => {

    if (!emailOrPhone) {
      alert("Please enter Email/Phone & Password");
      return;
    }

    alert("Otp Sent successfully!");
  };

  return (
    <>
      <div className="fotgotPsd-container">
        <div className="fotgotPsd-card">
          <h1>Forgot Password</h1>
          <label>Enter the Email/PhoneNo</label>
          <input type="text" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />

          <button className="registerBtn" onClick={handleOtp}>Send Otp</button>
        </div>
      </div>
    </>
  );

}
