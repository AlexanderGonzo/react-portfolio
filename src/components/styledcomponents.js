import styled from "styled-components";

export const Div = styled.div`
  font-family: "Inconsolata", monospace;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
`;
export const Pre = styled.div`
  font-family: "Inconsolata", monospace;
  white-space: pre;
  color: white;
`;

export const Divider = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  color: ${props => props.theme.main};
`;
