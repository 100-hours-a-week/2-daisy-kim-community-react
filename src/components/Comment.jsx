import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Popup from "./Popup";

export default function Comment({ profileImage, author, date, content }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleAcceptPopup() {
    toast.success("댓글이 삭제되었습니다!");
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
    <CommentContainer>
      <CommentHeader>
        <CommentAuthorInfo>
          <CommentProfileImage src={profileImage} />
          <CommentAuthorName>{author}</CommentAuthorName>
          <CommentTimestamp>{date}</CommentTimestamp>
        </CommentAuthorInfo>
        <CommentButtonWrapper>
          <CommentEditButton>수정</CommentEditButton>
          <CommentDeleteButton onClick={() => openDeletePopup()}>
            삭제
          </CommentDeleteButton>
        </CommentButtonWrapper>
      </CommentHeader>
      <CommentContent>{content}</CommentContent>
      {isPopupOpen && (
        <Popup
          titleText={"댓글을 삭제하시겠습니까?"}
          subtitleText={"삭제한 내용은 복구할 수 없습니다"}
          onAccept={handleAcceptPopup}
          onClose={handlePopupClose}
        />
      )}
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const CommentAuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const CommentProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  background-size: cover;
  background-position: center;
`;

const CommentAuthorName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const CommentTimestamp = styled.p`
  font-size: 12px;
`;

const CommentContent = styled.p`
  font-size: 12px;
  padding: 0 40px;
`;

const CommentButtonWrapper = styled.div`
  display: flex;
  right: 0;
  gap: 8px;
  white-space: nowrap;
`;

const CommentEditButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 12px;
`;

const CommentDeleteButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 12px;
`;
