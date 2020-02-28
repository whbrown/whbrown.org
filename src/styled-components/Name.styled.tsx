import styled from 'styled-components';

const Name = styled.h1`
  transition: all 2s;
  word-wrap: break-word;
  cursor: pointer;
  font-size: calc(4em + 6vw);
  font-family: 'Recursive', Arial, Helvetica, sans-serif;
  font-variation-settings:"CASL" 0,"slnt" -1,"MONO" 0.5;
  font-weight: 600;
  color: #EFDC05;
  width: 100%;
  margin-bottom: 30vh;
  /* padding: 0em 0.5em 1em; */
  /* margin: 2em 0 5em; */
  &:hover {
    font-weight:700;
    font-variation-settings:"CASL" 1,"slnt" -10,"MONO" 0.5;
  }
`;

export default Name;