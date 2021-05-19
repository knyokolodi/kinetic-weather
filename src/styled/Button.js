import styled from 'styled-components';

export const Button = styled.button`
  width: auto;
  padding: 10px 20px;
  color: #fff;
  background-color: #2d2c2c;
  border: solid 1px #2d2c2c;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: #000;
    border: solid 1px #000;
    cursor: pointer;
  }
`;
