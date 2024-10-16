import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Amazon_logo.svg.png";
import classes from "./Auth.module.css";
import { auth } from "../../Utility/firebase";
import { type } from "../../Utility/action.type";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
// import Loader from "../../Components/Loader/Loader";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navStateData = useLocation();
  // console.log(navStateData);
  const navigate = useNavigate();
  // console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signIn") {
      setLoading({ ...loading, signIn: true });
      //firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      {/* Form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>

        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={classes.login__SignInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={18} /> : "Sign In"}
          </button>
        </form>
        {/* Agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* New acc btn */}
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
          className={classes.login__RegisterButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={18} />
          ) : (
            "Create New Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "7px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
