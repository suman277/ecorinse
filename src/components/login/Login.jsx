import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EcoRinseSquare from "../../assets/images/background/EcoRinseSquare.jpeg";
import EcoLogo from "../../assets/images/navbar/EcoLogo.png";
import style from "./Login.module.css";
import { User, Lock, Eye, EyeClosed } from "lucide-react";
import { loginThunk } from "../../redux/login/loginThunk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await dispatch(loginThunk(userDetails)).unwrap();
      navigate("/admin");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const { response, isLoading, error } = useSelector((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const handleEyeBtn = () => {
    setShowPassword((prev) => !prev);
  };
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.leftContainer}>
        <img className={style.imageClass} src={EcoRinseSquare} />
      </div>
      <div className={style.rightContainer}>
        <div className={style.credContainer}>
          <div className={style.topContainer}>
            <img className={style.ecoLogo} src={EcoLogo} />
          </div>
          <span className={style.header}>Sign in to your EcoRinse account</span>
          <span className={style.subDetails}>
            Welcome back! Please enter your details
          </span>
          <div className={style.credDetails}>
            <div className={style.userNameContainer}>
              <User />
              <input
                className={style.inputContainer}
                type="email"
                value={userDetails.email}
                placeholder="Enter Email"
                name="email"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.userNameContainer}>
              <Lock />
              <input
                className={style.inputContainer}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={userDetails.password}
                name="password"
                onChange={(e) => onChange(e)}
              />
              <div className={style.eyeIcon} onClick={() => handleEyeBtn()}>
                {showPassword ? <Eye /> : <EyeClosed />}
              </div>
            </div>
            <button
              className={style.logIn}
              onClick={() => handleSubmit()}
              disabled={isLoading}
            >
              {isLoading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
