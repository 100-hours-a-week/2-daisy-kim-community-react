import styled from "styled-components";

export default function Comment({ profileImage, author, date, content }) {
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
          <CommentDeleteButton>삭제</CommentDeleteButton>
        </CommentButtonWrapper>
      </CommentHeader>
      <CommentContent>{content}</CommentContent>
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
