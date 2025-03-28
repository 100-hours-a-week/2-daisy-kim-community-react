import { postCreatePost } from "@api/postApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PostWrite() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      toast.error("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const userId = localStorage.getItem("userId");

    try {
      const payload = {
        userId: Number(userId),
        title,
        content,
        postImage: imageUrl || null,
      };

      const response = await postCreatePost(payload);
      console.log("게시글 생성: ", response);
      toast.success("게시글이 작성되었습니다!");
      navigate("/postlist");
    } catch (error) {
      console.error("게시글 작성: ", error);
      toast.error("게시글 작성을 실패했습니다.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <EditTitle>게시글 작성</EditTitle>
        <EditContainer>
          <EditSubTitle>제목 *</EditSubTitle>
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요 (최대 26글자)"
          />
          <EditSubTitle>내용 *</EditSubTitle>
          <ContentInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
          <EditSubTitle>이미지 *</EditSubTitle>
          <EditFileInput
            type="file"
            onChange={handleImageUpload}
            id="fileUpload"
          />
        </EditContainer>
        <EditButton type="button" onClick={handleSubmit}>
          완료
        </EditButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditTitle = styled.p`
  padding: 10px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const EditContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const EditSubTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const TitleInput = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  color: black;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  overflow: hidden;

  &::placeholder {
    align-items: center;
    font-size: 12px;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  color: black;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  overflow: hidden;
`;

const EditFileInput = styled.input``;

const EditButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  background-color: #a996e7;
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-top: 20px;
`;
