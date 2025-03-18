import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleBackNavigation = () => {
    if (location.pathname !== "/login" && location.pathname !== "/signup") {
      navigate(-1);
    }
  };

  return (
    <Container>
      <FaAngleLeft
        onClick={handleBackNavigation}
        style={{ cursor: "pointer" }}
      />
      <Text>아무말 대잔치</Text>
      <UserIconWrapper>
        <FaCircleUser onClick={toggleDropdown} />

        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => navigate("/editprofile")}>
              회원정보 수정
            </DropdownItem>
            <DropdownItem onClick={() => navigate("/editpassword")}>
              비밀번호 수정
            </DropdownItem>
            <DropdownItem onClick={() => navigate("/login")}>
              로그아웃
            </DropdownItem>
          </DropdownMenu>
        )}
      </UserIconWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid gray;

  font-size: 20px;
  background-color: #f4f5f7;
`;

const Text = styled.p`
  color: black;
  font-weight: bold;
`;

const UserIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 20%;
  width: 120px;
  background-color: lightgray;
  z-index: 10;
  border-radius: 8px;
`;

const DropdownItem = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  padding: 8px;

  &:hover {
    background-color: gray;
    border-radius: 8px;
  }
`;
