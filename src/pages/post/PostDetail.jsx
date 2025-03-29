import styled from "styled-components";
import Comment from "@components/comment/Comment";
import Post from "@components/post/Post";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getPostDetail } from "@api/postApi";
import { useEffect, useState } from "react";
import defaultProfileImage from "@assets/default-profile.jpeg";
import {
  postCreateComment,
  getCommentList,
  patchEditComment,
} from "@api/commentApi";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [editCommentId, setEditCommentId] = useState(null);

  const handleRegisterComment = async () => {
    console.log("댓글 수정 요청!", {
      postId: id,
      commentId: editCommentId,
      content: comment,
    });

    const userId = localStorage.getItem("userId");

    if (!comment.trim()) {
      toast.error("댓글을 입력해주세요.");
      return;
    }

    if (!userId) {
      toast.error("로그인이 필요합니다.");
      return;
    }

    try {
      if (editCommentId) {
        await patchEditComment(id, editCommentId, {
          content: comment,
          userId: Number(userId),
        });
        toast.success("댓글이 수정되었습니다.");
      } else {
        await postCreateComment(id, {
          content: comment,
          userId: Number(userId),
        });
        toast.success("댓글이 등록되었습니다.");
      }
      setComment("");
      setEditCommentId(null);

      const updatedComments = await getCommentList(id);
      setCommentList(updatedComments.data);
    } catch (error) {
      console.error("댓글 등록 실패", error);
      toast.error("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (!id || id === "undefined") return;

    const fetchPost = async () => {
      try {
        const res = await getPostDetail(id);
        console.log("상세페이지", res);
        setPost(res.data[0]);
      } catch (error) {
        console.error("게시글 상세 조회 실패: ", error);
        toast.error("게시글 정보를 불러오지 못했습니다.");
      }
    };

    const fetchComments = async () => {
      if (!id || id === "undefined") return;

      try {
        const res = await getCommentList(id);
        setCommentList(res.data);
      } catch (error) {
        toast.error("댓글 목록을 불러오지 못했습니다.");
        throw error.response?.data;
      }
    };
    fetchPost();
    fetchComments();
  }, [id]);

  return (
    <Container>
      <Wrapper>
        {post ? (
          <>
            <Post
              key={post.post_id}
              title={post.title}
              profileImage={post.author.profile_image ?? defaultProfileImage}
              author={post.author.nickname}
              date={post.created_at}
              content={post.content}
              likeCount={post.like_count}
              viewCount={post.view_count}
              commentCount={post.comment_count}
            />
            <WriteCommentSection>
              <WriteCommentBox
                placeholder="댓글을 남겨주세요!"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <WriteButtonWrapper>
                <WriteButton onClick={handleRegisterComment}>
                  {editCommentId ? "댓글 수정" : "댓글 등록"}
                </WriteButton>
              </WriteButtonWrapper>
            </WriteCommentSection>

            <CommentSection>
              {commentList.map((comment) => (
                <Comment
                  key={comment.commentId}
                  profileImage={comment.profileImage ?? defaultProfileImage}
                  author={comment.author.nickname}
                  date={comment.createdAt}
                  content={comment.content}
                  onEdit={() => {
                    setComment(comment.content);
                    setEditCommentId(comment.commentId);
                  }}
                />
              ))}
            </CommentSection>
          </>
        ) : (
          <p>로딩 중</p>
        )}
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
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
