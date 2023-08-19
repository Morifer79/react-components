import styled from '@emotion/styled';

export const FriendAvatar = styled.img`
  margin-right: 15px;
  padding: 12px;

  width: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms;

  :hover {
    transform: scale(1.25);
  }
`;
