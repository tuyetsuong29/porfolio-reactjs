import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row
  overflow: auto;
`;

export const SidebarWrapper = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #787878;
  color: #fff;
  font-family: "Lora", serif;
  font-size: 1rem;
`;

export const Container = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 4rem;
  padding: 1.2rem;
  background-color: white;
  font-family: "Lora", serif;
  font-size: 1rem;
`;

export const BodyWrraper = styled.div`
  height: 100%;
  background-color: #f8f8f8;
  padding: 2rem;
`;

export const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0 13rem 0;
`;
export const CardBody = styled.div`
  overflow: auto;
  background-color: white;
  font-family: "Lora", serif;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 15rem 1rem;
  border: 1px solid #f8f8f8;
  border-radius: 20px;
`;
