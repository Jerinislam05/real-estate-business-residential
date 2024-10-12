import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../shared/Navbar";
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            toast.error(passwordValidation.message);
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Registration successful!"); 
            navigate("/login");
        } catch (error) {
            console.error("Registration Error:", error);
            toast.error("Failed to register: " + error.message);
        }
    };

    const validatePassword = (password) => {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const isValid = uppercasePattern.test(password) && 
                        lowercasePattern.test(password) && 
                        password.length >= 6;

        if (!isValid) {
            return {
                isValid: false,
                message: "Password must contain at least 6 characters, including an uppercase letter and a lowercase letter.",
            };
        }
        return { isValid: true };
    };

    return (
        <div>
            <Navbar />
            <h2 className="text-3xl my-10 font-display font-bold text-center">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Your Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4 font-display font-bold">
                Already have an account?{" "}
                <Link className="text-blue-800 font-extrabold" to='/login'>
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;