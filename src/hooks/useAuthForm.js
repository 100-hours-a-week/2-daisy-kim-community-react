import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "@utils/validators";

export const useAuthForm = (formType, navigate) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      // signup → login / login → postlist
      navigate(formType === "signup" ? "/" : "/postLIst");
    }
  }, [isAuthenticated, formType, navigate]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));

    setConfirmPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setConfirmPasswordError(
      validateConfirmPassword(newConfirmPassword, password)
    );
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!emailError && !passwordError && !confirmPasswordError) {
      toast.success("회원가입 성공!");
      setIsAuthenticated(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = email === "test@naver.com" && password === "Test1234!";
    if (!isValidUser) {
      toast.error("아이디 또는 비밀번호를 확인해주세요");
    } else {
      toast.success("로그인 성공!");
      setIsAuthenticated(true);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    nickname,
    profileImage,
    emailError,
    passwordError,
    confirmPasswordError,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleNicknameChange,
    handleImageUpload,
    handleSignup,
    handleLogin,
  };
};
