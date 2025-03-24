import Popup from "@components/Popup";
import { useDeletePopup } from "@hooks/useDeletePopup";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const navigate = useNavigate();

  const { isOpen, openPopup, handleAccept, handleClose } = useDeletePopup({
    successMessage: "게시글이 삭제되었습니다.",
    cancelMessage: "삭제가 취소되었습니다.",
  });

  return (
    <>
      <PostView
        {...props}
        onEdit={() => navigate("/postedit")}
        onDelete={openPopup}
      />
      {isOpen && (
        <Popup
          titleText={"게시글을 삭제하시겠습니까?"}
          subtitleText={"삭제한 내용은 복구할 수 없습니다."}
          onAccept={handleAccept}
          onClose={handleClose}
        />
      )}
    </>
  );
}
