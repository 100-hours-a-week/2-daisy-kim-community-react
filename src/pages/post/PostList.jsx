import styled from "styled-components";
import PostCard from "../../components/PostCard";

export default function PostList() {
  const postDummy = [
    {
      id: 1,
      title: "제목 1",
      likes: 10,
      comments: 20,
      views: 3000000,
      date: "2025-03-10 12:03:48",
      profileImage: "https://placehold.co/",
      author: "작성자 1",
    },
    {
      id: 2,
      title: "제목 2",
      likes: 10,
      comments: 20,
      views: 30000,
      date: "2025-03-10 12:03:48",
      profileImage: "https://placehold.co/",
      author: "작성자 2",
    },
    {
      id: 3,
      title: "제목 3",
      likes: 10,
      comments: 20,
      views: 3000,
      date: "2025-03-10 12:03:48",
      profileImage: "https://placehold.co/",
      author: "작성자 3",
    },
    {
      id: 4,
      title: "제목 4",
      likes: 10,
      comments: 20,
      views: 3000,
      date: "2025-03-10 12:03:48",
      profileImage: "https://placehold.co/",
      author: "작성자 4",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <TitleText>
          안녕하세요, <br />
          아무 말 대잔치 <b>게시판</b>입니다.
        </TitleText>
        <WriteButton>게시글 작성</WriteButton>
        {postDummy.map((post) => (
          <PostCard
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
