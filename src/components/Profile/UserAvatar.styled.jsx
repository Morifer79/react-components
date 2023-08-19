import styled from "@emotion/styled";
import { getRandomHexColor } from "components/Statistics/StatisticsListItem.styled";

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 50%;
  margin-bottom: 15px;
  cursor: pointer;
  background: ${getRandomHexColor()};
	transition: transform 250ms, background 300ms linear;
  :hover {
    background: ${props => getRandomHexColor()};
    transform: scale(1.3);
  }
`;