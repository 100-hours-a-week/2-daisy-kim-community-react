import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useAuthForm } from "@hooks/useAuthForm";

export default function Signup() {
  const navigate = useNavigate();
  const {
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
  } = useAuthForm("signup", navigate);

  return (
    <Container>
      <ProfileContainer>
        <TitleText>회원가입</TitleText>
        <FormText>프로필 사진</FormText>
        <ProfileImage htmlFor="imageUpload">
          {profileImage ? (
            <img src={profileImage} alt="프로필 이미지" />
          ) : (
            <FaPlus />
          )}
        </ProfileImage>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </ProfileContainer>
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

        <FormText>비밀번호 확인</FormText>
        <FormInput
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="••••••••"
        />
        {confirmPasswordError && <ErrorText>{confirmPasswordError}</ErrorText>}

        <FormText>닉네임</FormText>
        <FormInput
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="닉네임을 입력하세요"
        />

        <LoginButton type="submit" onClick={handleSignup}>
          회원가입
        </LoginButton>
        <LinkToText onClick={() => navigate("/login")}>로그인</LinkToText>
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

export const ProfileContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ProfileImage = styled.label`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
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
