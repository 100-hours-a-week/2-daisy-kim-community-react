import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "@utils/validators";
import { postSignup, postLogin } from "@api/auth";
import defaultProfileImage from "@assets/default-profile.jpeg";

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

  const [objectUrl, setObjectUrl] = useState(null);

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (objectUrl) {
        URL.rebokeObjectURL(objectUrl);
      }

      const newUrl = URL.createObjectURL(file);
      setProfileImage(newUrl);
      setObjectUrl(newUrl);
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

  const handleSignup = async (e) => {
    e.preventDefault();

    if (emailError || passwordError || confirmPasswordError) {
      toast.error("입력값을 확인해주세요.");
      return;
    }

    try {
      const payload = {
        email,
        password,
        nickname,
        profile_image_url: profileImage || defaultProfileImage,
      };
      const res = await postSignup(payload);
      console.log("회원가입 응답:", res);

      toast.success("회원가입 성공!");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("회원가입 실패: ", error);
      toast.error("회원가입에 실패했습니다.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (emailError || passwordError || confirmPasswordError) {
      toast.error("입력값을 확인해주세요.");
      return;
    }

    try {
      const payload = {
        email,
        password,
      };
      console.log("로그인 payload: ", payload);

      const res = await postLogin(payload);
      console.log("로그인 응답:", res);

      toast.success("로그인 성공!");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("로그인 실패: ", error);
      toast.error("아이디 또는 비밀번호가 올바르지 않습니다.");
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
