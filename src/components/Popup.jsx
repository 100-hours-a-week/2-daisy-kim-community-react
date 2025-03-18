import styled from "styled-components";

export default function Popup({ onCancel, onAccept, onClose }) {
  const titleText = "게시글을 삭제하시겠습니까?";
  const subtitleText = "삭제한 내용은 복구할 수 없습니다.";

  return (
    <DimBackground onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <TiteText>{titleText}</TiteText>
        <SubTitleText>{subtitleText}</SubTitleText>
        <ButtonWrapper>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <AcceptButton onClick={onAccept}>확인</AcceptButton>
        </ButtonWrapper>
      </Container>
    </DimBackground>
  );
}

const DimBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  width: 200px;
  height: auto;
  padding: 20px 30px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TiteText = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const SubTitleText = styled.p`
  font-size: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  width: 80px;
  font-size: 12px;
  font-weight: 600;
`;

const AcceptButton = styled.button`
  width: 80px;

  background-color: #a996e7;
  font-size: 12px;
  font-weight: 600;
`;
