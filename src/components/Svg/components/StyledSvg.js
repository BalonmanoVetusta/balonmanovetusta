import styled from "styled-components";

export const StyledSvg = styled.svg`
  ${(props) => {
    props.fillValue ??= "--svg-color";

    return `
      ${props.$fillValue ? `fill: ${props.$fillValue};` : ""}
      ${props?.$strokeValue ? `stroke: ${props.$strokeValue};` : ""}
      ${props?.$shadowValue ? `filter: ${props.$shadowValue};` : ""}
    `;
  }}
`;
