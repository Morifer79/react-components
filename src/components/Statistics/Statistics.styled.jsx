import styled from '@emotion/styled';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsList = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
  list-style: none;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const StatisticsListItem = styled.li`
  padding: 24px 30px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  text-shadow: 2px 0 2px #8c1b21, 0 2px 2px #8c1b21, -2px 0 2px #8c1b21,
    0 -2px 2px #8c1b21;
  cursor: pointer;
  background: ${props => getRandomHexColor()};
  transition: background 300ms linear;

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

export const StatisticsSection = styled.section`
  margin: 0 auto 100px;

  display: flex;
  align-items: flex-end;
  height: 220px;
  max-width: 550px;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
`;
