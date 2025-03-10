import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

export default function Header() {
  return (
    <Container>
      <FaAngleLeft />
      <Text>아무말 대잔치</Text>
      <FaCircleUser />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  overflow-x: hidden;
`;

export const Text = styled.p`
  color: black;
  font-weight: bold;
`;
