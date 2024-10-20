import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  auth,
  googleProvider,
  githubProvider,
} from "../../firebase/firebase.config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useAuth } from "../../components/authContext/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    console.log("Email:", trimmedEmail);
    console.log("Password:", trimmedPassword);

    try {
      await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      login();
      toast.success("Logged in successfully!");
      navigate(from);
    } catch (error) {
      console.error("Login Error:", error);
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else {
        toast.error("Failed to login: " + error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      login()
      toast.success("Logged in with Google!");
      navigate(from);
    } catch (error) {
      toast.error("Google login failed: " + error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      login()
      toast.success("Logged in with GitHub!");
      navigate(from);
    } catch (error) {
      toast.error("GitHub login failed: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl my-10 font-display font-bold text-center">
        Please Login
      </h2>

      <form
        onSubmit={handleEmailPasswordLogin}
        className="md:w-3/4 lg:w-1/2 mx-auto card-body"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
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
          <button className="btn btn-primary w-full">Login</button>
        </div>
      </form>

      <div className="mt-6">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-2"
        >
          Login with Google
        </button>

        <button
          onClick={handleGithubLogin}
          className="btn btn-outline w-full mt-2"
        >
          Login with GitHub
        </button>
      </div>

      <p className="text-center mt-4 font-display font-bold">
        Do not have an account? please{" "}
        <Link className="text-blue-800 font-extrabold" to="/register">
          Register
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
