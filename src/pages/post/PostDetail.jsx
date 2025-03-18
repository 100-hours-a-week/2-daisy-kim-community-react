import styled from "styled-components";
import { commentDummy } from "@data/CommentDummy.js";
import Comment from "@components/Comment";
import { postDummy } from "@data/PostDummy";
import Post from "@components/Post";

export default function PostDetail() {
  return (
    <Container>
      <Wrapper>
        {postDummy.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            profileImage={post.profileImage}
            author={post.author}
            date={post.date}
            content={post.content}
            likeCount={post.likeCount}
            viewCount={post.viewCount}
            commentCount={post.commentCount}
          />
        ))}
        <WriteCommentSection>
          <WriteCommentBox placeholder="댓글을 남겨주세요!" />
          <WriteButtonWrapper>
            <WriteButton>댓글 등록</WriteButton>
          </WriteButtonWrapper>
        </WriteCommentSection>

        <CommentSection>
          {commentDummy.map((comment) => (
            <Comment
              key={comment.id}
              profileImage={comment.profileImage}
              author={comment.author}
              date={comment.date}
              content={comment.content}
            />
          ))}
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
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
