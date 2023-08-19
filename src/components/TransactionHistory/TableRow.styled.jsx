import styled from '@emotion/styled';

export const TableRow = styled.tr`
  transition: transform 250ms;

  :hover {
    transform: scale(1.02);
  }

  :nth-of-type(even) {
    background-color: #e8edee;
  }
`;