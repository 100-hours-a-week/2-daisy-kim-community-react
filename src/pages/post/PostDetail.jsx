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
        <ContentsSection>
          <ContentImage></ContentImage>
          <ContentText>
            무엇을 얘기할까요? 아무말이라면, 삶은 항상 놀라운 모험이라고
            생각합니다. 우리는 매일 새로운 경험을 하고 배우며 성장합니다. 때로는
            어려움과 도전이 있지만, 그것들이 우리를 더 강하고 지혜롭게 만듭니다.
            또한 우리는 주변의 사람들과 연결되며 사랑과 지지를 받습니다. 그래서
            우리의 삶은 소중하고 의미가 있습니다. 자연도 아름다운 이야기입니다.
            우리 주변의 자연은 끝없는 아름다움과 신비로움을 담고 있습니다. 산,
            바다, 숲, 하늘 등 모든 것이 우리를 놀라게 만들고 감동시킵니다.
            자연은 우리의 생명과 안정을 지키며 우리에게 힘을 주는 곳입니다.
            마지막으로, 지식을 향한 탐구는 항상 흥미로운 여정입니다. 우리는
            끝없는 지식의 바다에서 배우고 발견할 수 있으며, 이것이 우리를 더
            깊이 이해하고 세상을 더 넓게 보게 해줍니다. 그런 의미에서, 삶은
            놀라움과 경이로움으로 가득 차 있습니다. 새로운 경험을 즐기고 항상
            앞으로 나아가는 것이 중요하다고 생각합니다.
          </ContentText>
        </ContentsSection>

        <PostStatsSection>
          <StatBox>
            123
            <span>좋아요</span>
          </StatBox>
          <StatBox>
            123 <span>조회수</span>
          </StatBox>
          <StatBox>
            123 <span>댓글</span>
          </StatBox>
        </PostStatsSection>
        <WriteCommentSection>
          <WriteCommentBox placeholder="댓글을 남겨주세요!" />
          <WriteButtonWrapper>
            <WriteButton>댓글 등록</WriteButton>
          </WriteButtonWrapper>
        </WriteCommentSection>

        <CommentSection>
          <CommentInfoWrapper>
            <CommentInfo>
              <UserInfo>
                <CommentProfileImage src={profileImage} />
                <CommentAuthorName>{author}</CommentAuthorName>
                <CommentCreatedDate>{date}</CommentCreatedDate>
              </UserInfo>
              <CommentButtonContainer>
                <CommentEditButton>수정</CommentEditButton>
                <CommentDeleteButton>삭제</CommentDeleteButton>
              </CommentButtonContainer>
            </CommentInfo>
            <CommentContent>
              끝없는 지식의 바다에서 배우고 발견할 수 있으며, 이것이 우리를 더
              깊이 이해하고 세상을 더 넓게 보게 해줍니다. 그런 의미에서, 삶은
              놀라움과 경이로움으로 가득 차 있습니다. 새로운 경험을 즐기고 항상
              앞으로 나아가는 것이 중요하다고 생각합니다.
            </CommentContent>
          </CommentInfoWrapper>
        </CommentSection>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 30%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
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

const ContentsSection = styled.div`
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

const WriteCommentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

const WriteCommentBox = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  resize: none;
  font-size: 10px;
  padding: 8px;
  background-color: transparent;
  box-sizing: border-box;
  color: black;
`;

const WriteButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  border-top: 1px solid lightgray;
  padding-top: 8px;
`;

const WriteButton = styled.button`
  width: 100%;
  position: absolute;
  right: 0;
  width: 80px;
  font-size: 10px;
  border-radius: 16px;
  font-weight: 600;
  background-color: #aca0eb;
`;

const CommentSection = styled.div`
  display: flex;
  width: 100%;
`;

const CommentInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const UserInfo = styled.div`
  display: flex;
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

const CommentCreatedDate = styled.p`
  font-size: 12px;
`;

const CommentContent = styled.p`
  font-size: 12px;
  padding: 0 40px;
`;

const CommentButtonContainer = styled.div`
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
