import Popup from "@components/Popup";
import { useDeletePopup } from "@hooks/useDeletePopup";
import CommentView from "./CommentView";
import defaultProfileImage from "@assets/default-profile.jpeg";

export default function Comment({ profileImage, author, date, content }) {
  const { isOpen, openPopup, handleAccept, handleClose } = useDeletePopup({
    successMessage: "댓글이 삭제되었습니다.",
    cancelMessage: "삭제가 취소되었습니다.",
  });

  return (
    <>
      <CommentView
        profileImage={profileImage ?? defaultProfileImage}
        author={author}
        date={date}
        content={content}
        onEdit={() => console.log("")} // 수정 시 받아온 댓글 작성창으로 넘기고 수정되는거 작성하기 (PostDetail)
        onDelete={openPopup}
      />
      {isOpen && (
        <Popup
          titleText={"댓글을 삭제하시겠습니까?"}
          subtitleText={"삭제한 내용은 복구할 수 없습니다"}
          onAccept={handleAccept}
          onClose={handleClose}
        />
      )}
    </>
  );
}
