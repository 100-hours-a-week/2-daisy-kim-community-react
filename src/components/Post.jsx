import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Popup from "./Popup";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Post({
  title,
  profileImage,
  author,
  date,
  content,
  likeCount,
  viewCount,
  commentCount,
}) {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleAcceptPopup() {
    toast.success("게시글이 삭제되었습니다!");
    setIsPopupOpen(false);
  }

  function handlePopupClose() {
    toast.error("삭제가 취소되었습니다.");
    setIsPopupOpen(false);
  }

  function openDeletePopup() {
    setIsPopupOpen(true);
  }

  return (
    <Container>
      <PostTitle>{title}</PostTitle>
      <PostAuthorSection>
        <PostAuthorInfo>
          <ProfileImage src={profileImage} />
          <AuthorName>{author}</AuthorName>
          <CreatedDate>{date}</CreatedDate>
        </PostAuthorInfo>
        <ButtonContainer>
          <EditButton onClick={() => navigate("/postedit")}>수정</EditButton>
          <DeleteButton onClick={() => openDeletePopup()}>삭제</DeleteButton>
        </ButtonContainer>
      </PostAuthorSection>
      <PostContentSection>
        <ContentImage />
        <ContentText>{content}</ContentText>
      </PostContentSection>

      <PostStatsSection>
        <StatBox>
          {likeCount}
          <span>좋아요</span>
        </StatBox>
        <StatBox>
          {viewCount} <span>조회수</span>
        </StatBox>
        <StatBox>
          {commentCount} <span>댓글</span>
        </StatBox>
      </PostStatsSection>

      {isPopupOpen && (
        <Popup
          titleText={"게시글을 삭제하시겠습니까?"}
          subtitleText={"삭제한 내용은 복구할 수 없습니다."}
          onAccept={handleAcceptPopup}
          onClose={handlePopupClose}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const PostTitle = styled.p`
  padding: 10px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const PostAuthorSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;

  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const PostAuthorInfo = styled.div`
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

const PostContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 200px;
  background-color: gray;
  margin-top: 25px;
  margin-bottom: 10px;
  border-radius: 12px;
`;

const ContentText = styled.p`
  font-size: 12px;
`;

const PostStatsSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 600;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const StatBox = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgray;
  padding: 8px 16px;
  border-radius: 12px;
  text-align: center;
`;
