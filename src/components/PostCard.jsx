import styled from "styled-components";
import { formatNumber } from "@utils/validators";

export default function PostCard({
  title,
  likes,
  comments,
  views,
  date,
  profileImage,
  author,
  onClick,
}) {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>

      <InfoSection>
        <InfoText>
          좋아요 {formatNumber(likes)} 댓글 {formatNumber(comments)} 조회수{" "}
          {formatNumber(views)}
        </InfoText>
        <CreatedDate>{date}</CreatedDate>
      </InfoSection>

      <AuthorSection>
        <ProfileImage src={profileImage} />
        <AuthorName>{author}</AuthorName>
      </AuthorSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Title = styled.p`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const InfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

const InfoText = styled.p`
  font-size: 12px;
`;

const CreatedDate = styled.p`
  font-size: 12px;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  border-top: 1px solid lightgray;
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
