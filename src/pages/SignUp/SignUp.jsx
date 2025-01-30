import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/image/google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // to do
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInf = {
          displayName: data.name,
        };
        updateUser(userInf)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sign up failed!");
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
       fetch("https://ajker-bazar-zeta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Sign In Successfully Done!");
          navigate("/");
        }
      });
  };
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("User Created Successfully with Google");
          navigate("/"); // Redirect to the home page or desired route
        }
        // setInUser(user); // Fix the typo here
      })
      .catch((error) => {
        console.error("Google Sign-Up Error:", error);
        toast.error("Google Sign-Up Failed!"); // Show an error toast
      });
  };

  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          {/* <h1>{signInUser.email}</h1> */}
          <div className="text-center ">
            <h1 className="text-2xl font-bold">Sing Up now!</h1>
          </div>
          <div className="card w-96 bg-base-100  shadow-2xl">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name Is Required",
                  })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is Required",
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Pasword Is Required",
                    minLength: {
                      value: 6,
                      message: "Password must be six characters long",
                    },
                    pattern: {
                      value: /(?=.*?[A-Z])(?=.*?[!@#$*%])(?=.*?[0-9])/,
                      message:
                        "Password must be one Uppercase, a Digit and a special characters",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}

                <label className="label">
                  <Link
                    to="/login"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    alredy have an account? Please login
                  </Link>
                </label>
              </div>

              <div className="form-control mt-1">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="form-control mt-[-20px] mx-8 mb-5">
              <button onClick={handleGoogleSignUp} className="btn btn-primary">
                <img src={google} alt="Google" className="w-10 h-10" />
                Sign Up with Google
              </button>
            </div>


           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
