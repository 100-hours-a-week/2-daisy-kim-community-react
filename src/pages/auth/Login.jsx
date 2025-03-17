import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthForm } from "../../hooks/useAuthForm";

export default function Login() {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useAuthForm("login", navigate);

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
