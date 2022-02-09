import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(65, 23, 116, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 150px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`;

export const Footer = styled.footer`
  background: #110537;
  border-top: 1px solid #444;
  color: #afafaf;
  text-align: center;
  padding: 1em;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Link = styled.a`
  color: #afafaf;
  text-decoration: none;
  font-weight: bold;
`;
