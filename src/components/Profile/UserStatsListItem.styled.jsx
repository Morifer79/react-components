import styled from '@emotion/styled';
import { getRandomHexColor } from 'components/Statistics/StatisticsListItem.styled';

export const UserStatsListItem = styled.li`
  padding: 20px 26px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
		color: white;
    background: ${props => getRandomHexColor()};
  }
`;