import styled from '@emotion/styled';
import { getRandomHexColor } from 'components/Statistics/Statistics.styled';

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 50%;
  margin-bottom: 15px;
  cursor: pointer;
  background: ${props => getRandomHexColor()};
  transition: transform 250ms, background 300ms linear;
  :hover {
    background: ${props => getRandomHexColor()};
    transform: scale(1.3);
  }
`;

export const UserDescription = styled.div`
  padding: 30px;
`;

export const UserLocation = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const UserName = styled.p`
  margin: 0 0 8px;
  font-size: 25px;
  font-weight: 700;
`;

export const UserProfile = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;

  border-radius: 8px;
  max-width: 300px;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const UserQuantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const UserStatsList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-between;
  list-style: none;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: #f6f6f6;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const UserStatsListItem = styled.li`
  padding: 18px 26px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: color 300ms linear, background 300ms linear;

  :hover {
    color: #fff;
    background: #000;
  }
`;

export const UserTag = styled.p`
  font-size: 18px;
  margin: 0 0 8px;
`;

export const UserLabel = styled.span`
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
