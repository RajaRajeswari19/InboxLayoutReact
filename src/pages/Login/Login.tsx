import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!emailOrPhone || !password) {
            alert("Please enter Email/Phone & Password");
            return;
        }

        const validateEmailOrPhone = (emailOrPhone: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10}$/;

            return emailRegex.test(emailOrPhone) || phoneRegex.test(emailOrPhone);
        };

        const validatePassword = (password: string) => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            return passwordRegex.test(password);
        };

        if (!validateEmailOrPhone(emailOrPhone)) {
            alert("Please enter a valid Email or 10-digit Phone Number");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character");
            return;
        }

        sessionStorage.setItem("username", emailOrPhone);
        sessionStorage.setItem("password", password);

        //onLogin();
        navigate("/home");

    }

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h1>Login Form</h1>
                    <label>Email or Phone</label>
                    <input type="text" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p style={{ color: "#07889c", cursor: "pointer", marginTop: 0, marginBottom: 20 }}>
                        <span onClick={() => navigate("/forgotpassword")}> Forgot Password? </span>
                    </p>

                    <button onClick={handleLogin} style={{ fontSize:14, fontWeight:"bold" }}> LOGIN </button>

                    <p className="signup-text"> Not a member?{" "}
                        <span onClick={() => navigate("/signup")}> Signup now </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;

