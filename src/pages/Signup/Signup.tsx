import "./SignUp.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
    fullName: z.string().min(3, "Full Name is required"),
    username: z.string().min(3, "User Name is required"),
    email: z.email("Please enter a valid Email"),
    phoneNumber: z.string().regex(/^[0-9]{10}$/, "Phone Number must be 10 digits"),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"),
    confirmPassword: z.string(),
    gender: z.enum( ["Male", "Female", "Other"],{ message: "Please select Gender",}),
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }
);

type FormData = z.infer<typeof signupSchema>;

function Signup() {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Registration Successful");
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h3>Registration</h3>

                <div className="title-line"></div >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div>
                            <label>Full Name</label>
                            <input type="text" {...register("fullName")} />
                            <span className="validation-error">{errors.fullName?.message}</span>
                        </div>

                        <div>
                            <label>User Name</label>
                            <input type="text" {...register("username")} />
                            <span className="validation-error">{errors.username?.message}</span>
                        </div>
                    </div>

                    <div className="form-row">
                        <div>
                            <label>Email</label>
                            <input type="text" {...register("email")} />
                            <span className="validation-error">{errors.email?.message}</span>
                        </div>

                        <div>
                            <label>Phone Number</label>
                            <input type="text" {...register("phoneNumber")} />
                            <span className="validation-error">{errors.phoneNumber?.message}</span>
                        </div>
                    </div>

                    <div className="form-row">
                        <div>
                            <label>Password</label>
                            <input type="password" {...register("password")} />
                            <span className="validation-error">{errors.password?.message}</span>
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input type="password" {...register("confirmPassword")} />
                            <span className="validation-error"> {errors.confirmPassword?.message}</span>
                        </div>
                    </div>

                    <div className="gender-section">
                        <label>Gender</label>

                        <div className="radio-group">
                            <label>
                                <input type="radio" value="Male"{...register("gender")}/> Male
                            </label>

                            <label>
                                <input type="radio" value="Female" {...register("gender")}/> Female
                            </label>

                            <label>
                                <input type="radio" value="Other" {...register("gender")}/> Other
                            </label>
                        </div>

                        <span className="validation-error">{errors.gender?.message}</span>
                    </div>

                    <button type="submit" className="register-btn">
                        Register
                    </button>
                </form>
            </div >
        </div >

    );
}

export default Signup;
