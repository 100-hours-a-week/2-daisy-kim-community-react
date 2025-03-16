import { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/postList");
  }, [isLoggedIn, navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "* 올바른 이메일 주소 형식을 입력해주세요.";
    if (!emailRegex.test(email))
      return "* 올바른 이메일 주소 형식을 입력해주세요.";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "* 비밀번호를 입력해주세요.";
    if (password.length < 8 || password.length > 20) {
      return "* 비밀번호는 8자 이상, 20자 이하로 입력해주세요.";
    }
    if (!/[A-Z]/.test(password))
      return "* 비밀번호에 대문자를 최소 1개 포함해야 합니다.";
    if (!/[a-z]/.test(password))
      return "* 비밀번호에 소문자를 최소 1개 포함해야 합니다.";
    if (!/[0-9]/.test(password))
      return "* 비밀번호에 숫자를 최소 1개 포함해야 합니다.";
    if (!/[\W_]/.test(password))
      return "* 비밀번호에 특수문자를 최소 1개 포함해야 합니다.";
    return "";
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
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = email === "test@naver.com" && password === "Test1234!";
    if (!isValidUser) {
      toast.error("아이디 또는 비밀번호를 확인해주세요");
    } else {
      toast.success("로그인 성공!");
      setIsLoggedIn(true);
    }
  };

  return (
    <Container>
      <TitleText>로그인</TitleText>
      <FormContainer>
        <FormText>이메일</FormText>
        <FormInput
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@naver.com"
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}

        <FormText>비밀번호</FormText>
        <FormInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="••••••••"
        />
        {passwordError && <ErrorText>{passwordError}</ErrorText>}

        <LoginButton type="submit" onClick={handleLogin}>
          로그인
        </LoginButton>
        <LinkToText onClick={() => navigate("/signup")}>회원가입</LinkToText>
      </FormContainer>
    </Container>
  );
}

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const TitleText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const FormContainer = styled.div`
  align-items: center;
`;

export const FormText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 300px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  background-color: transparent;
  padding: 8px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

export const LoginButton = styled.button`
  width: 100%;
  display: flex;
  margin-top: 30px;
  background-color: #a996e7;
  font-weight: 700;
  font-size: 14px;
  justify-content: center;
`;

export const LinkToText = styled.p`
  width: 100%;
  font-size: 14px;
  color: black;
  font-weight: 500;
  text-align: center;
`;
