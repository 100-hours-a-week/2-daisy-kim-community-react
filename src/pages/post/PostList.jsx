import styled from "styled-components";
import PostCard from "@components/PostCard";
import { postListDummy } from "@data/postListDummy";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <TitleText>
          안녕하세요, <br />
          아무 말 대잔치 <b>게시판</b>입니다.
        </TitleText>
        <WriteButton onClick={() => navigate("/postwrite")}>
          게시글 작성
        </WriteButton>
        {postListDummy.map((post) => (
          <PostCard
            onClick={() => navigate(`/postdetail/${post.id}`)}
            key={post.id}
            title={post.title}
            likes={post.likes}
            comments={post.comments}
            views={post.views}
            date={post.date}
            profileImage={post.profileImage}
            author={post.author}
          />
        ))}
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
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: calc(100vh - 60px);
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: black;

  .b {
    font-weight: 700;
  }
`;

const WriteButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 12px;
  font-weight: 800;
  border-radius: 40px;
  align-self: flex-end;
  margin-bottom: 20px;
  color: white;
  background-color: #aea0eb;

  :hover {
    background-color: #7f6aee;
  }
`;
