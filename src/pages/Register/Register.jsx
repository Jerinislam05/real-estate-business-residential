import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar";


const Register = () => {
    const handleRegister =(e) => {
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form);
    }
    return (
        <div>
        <Navbar></Navbar>
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
                  name="Photo URL"
                  placeholder="Photo URL"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mt-4 font-display font-bold">Already have an account? <Link className="text-blue-800 font-extrabold" to='/login'>Login</Link></p>
    </div>
    );
};

export default Register;