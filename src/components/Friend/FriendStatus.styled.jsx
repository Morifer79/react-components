import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 15px;
  background: ${({ isOnline }) => (isOnline ? 'green' : 'red')}`;
