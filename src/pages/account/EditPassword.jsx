import { useAuthForm } from "@hooks/useAuthForm";
import toast from "react-hot-toast";
import styled from "styled-components";

export default function EditPassword() {
  const {
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useAuthForm();

  return (
    <Container>
      <Wrapper>
        <Title>비밀번호 수정</Title>

        <FormText>비밀번호</FormText>
        <FormInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력하세요"
        />
        {passwordError && <ErrorText>{passwordError}</ErrorText>}

        <FormText>비밀번호 확인</FormText>
        <FormInput
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="비밀번호를 한번 더 입력하세요"
        />
        {confirmPasswordError && <ErrorText>{confirmPasswordError}</ErrorText>}

        <EditButton onClick={() => toast.success("수정이 완료되었습니다.")}>
          수정하기
        </EditButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 60px);
  justify-content: center;
  padding-top: 100px;
  overflow-y: hidden;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const FormText = styled.p`
  width: 300px;

  font-size: 14px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 300px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  background-color: transparent;
  padding: 8px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 12px;
    font-weight: 500;
  }
`;

const ErrorText = styled.p`
  width: 300px;
  justify-content: start;
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

const EditButton = styled.button`
  width: 300px;
  padding: 8px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: #a996e7;
  color: white;
  font-size: 12px;
  font-weight: 700;
  margin-top: 40px;
`;
