import styled from "styled-components";
import PostCard from "@components/PostCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostList } from "@api/postApi";

export default function PostList() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await getPostList();
        console.log(res);
        setPostList(res.data);
      } catch (error) {
        console.error("게시글 목록 불러오기 실패: ", error);
      }
    };

    getPosts();
  }, []);

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
        {postList.map((post) => (
          <PostCard
            onClick={() => {
              navigate(`/postdetail/${post.postId}`);
            }}
            key={post.postId}
            title={post.title}
            likes={post.likeCount}
            comments={post.commentCount}
            views={post.viewCount}
            date={post.createdAt}
            profileImage={post.author.profileImage}
            author={post.author.nickname}
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
