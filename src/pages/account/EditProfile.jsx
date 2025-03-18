import { useRef, useState } from "react";
import styled from "styled-components";

export default function EditProfile() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>회원정보 수정</Title>
        <UserInfoWrapper>
          <SubTitle>프로필 사진 *</SubTitle>
          <ProfileImageWrapper src={profileImage} $bgImage={profileImage}>
            <ProfileOverlay onClick={() => fileInputRef.current.click()}>
              <ChangeProfileButton>변경</ChangeProfileButton>
            </ProfileOverlay>
          </ProfileImageWrapper>
          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
          />
          <SubTitle>이메일</SubTitle>
          <Content>test@naver.com</Content>
          <SubTitle>닉네임</SubTitle>
          <NicknameInput placeholder="nickname"></NicknameInput>
        </UserInfoWrapper>
        <EditButton>수정하기</EditButton>
        <DeleteButton>회원 탈퇴</DeleteButton>
        <SaveChangesButton>수정 완료</SaveChangesButton>
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
`;

const UserInfoWrapper = styled.div`
  width: 100%;
  align-self: flex-start;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: gray;
  background-size: 100%;
  background-image: ${(props) =>
    props.$bgImage ? `url(${props.$bgImage})` : "none"};
  object-fit: cover;
  border-radius: 50%;
  justify-content: center;
  align-self: center;
`;

const ProfileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const ChangeProfileButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 16px;
  padding: 6px 12px;
  justify-content: center;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Content = styled.p`
  font-size: 12px;
`;

const NicknameInput = styled.input`
  width: 100%;
  color: black;
  background-color: transparent;
  padding: 6px 8px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 12px;

  &::placeholder {
    font-size: 12px;
  }
`;

const EditButton = styled.button`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: #a996e7;
  color: white;
  font-size: 12px;
  font-weight: 700;
  margin-top: 20px;
`;

const DeleteButton = styled.button`
  width: 100%;
  font-size: 12px;
  background-color: transparent;
  color: black;
`;

const SaveChangesButton = styled.button`
  width: 80px;
  padding: 6px 8px;
  background-color: #a996e7;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  margin-top: 80px;
`;
