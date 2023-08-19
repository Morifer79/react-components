import styled from '@emotion/styled';

export const TableHeader = styled.th`
  padding: 10px;

  color: white;
  background-color: #46a0f3;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const TableRow = styled.tr`
  transition: transform 250ms;

  :hover {
    transform: scale(1.02);
  }

  :nth-of-type(even) {
    background-color: #e8edee;
  }
`;

export const TransactionTable = styled.table`
  margin: 0 auto;

  width: 50%;
  border-collapse: collapse;
  overflow: hidden;
`;
