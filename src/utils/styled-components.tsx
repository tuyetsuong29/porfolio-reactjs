import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  overflow: auto;
`;

export const SidebarWrapper = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: black;
  color: #fff;
`;

export const Container = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 4rem;
  padding: 1.2rem;
  background-color: #f7f7f5;
`;

export const Title = styled.span`
  height: 35%;
  font-size: 1.6rem;
`;

export const NavLink = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;
