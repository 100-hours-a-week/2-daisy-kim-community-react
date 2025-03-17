import styled from "styled-components";
import { postListDummy } from "@data/postListDummy";

export default function PostDetail() {
  const { title, profileImage, author, date } = postListDummy[0];

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>

        <ProfileSection>
          <AuthorContainer>
            <ProfileImage src={profileImage} />
            <AuthorName>{author}</AuthorName>
            <CreatedDate>{date}</CreatedDate>
          </AuthorContainer>
          <ButtonContainer>
            <EditButton>수정</EditButton>
            <DeleteButton>삭제</DeleteButton>
          </ButtonContainer>
        </ProfileSection>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 60px);
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: calc(100vh - 60px);
`;

const Title = styled.p`
  padding: 10px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;

  border-bottom: 1px solid lightgray;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  background-size: cover;
  background-position: center;
`;

const AuthorName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const CreatedDate = styled.p`
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  right: 0;
  gap: 8px;
`;

const EditButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 12px;
`;

const DeleteButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 12px;
`;
