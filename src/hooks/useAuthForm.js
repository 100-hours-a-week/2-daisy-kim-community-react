import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "@utils/validators";
import { postSignup } from "@api/auth";
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

  const handleLogin = (e) => {
    e.preventDefault();

    if (emailError || passwordError || confirmPasswordError) {
      toast.error("입력값을 확인해주세요.");
      return;
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
