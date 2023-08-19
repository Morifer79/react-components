import styled from '@emotion/styled';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsListItem = styled.li`
  padding: 24px 30px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  text-shadow: 2px 0 2px #8c1b21, 0 2px 2px #8c1b21, -2px 0 2px #8c1b21,
    0 -2px 2px #8c1b21;
  cursor: pointer;
  background: ${props => getRandomHexColor()};

  :hover {
    background: ${props => getRandomHexColor()};
  }

  :first-of-type {
    border-bottom-left-radius: 8px;
  }

  :last-of-type {
    border-bottom-right-radius: 8px;
  }
`;
