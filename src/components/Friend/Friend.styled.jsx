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

export const FriendName = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
`;

export const FriendStatus = styled.span`
  margin: 0 15px;

  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  width: 20px;
  height: 20px;
  border-radius: 50%;

  animation-name: blink;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 0.5;
    }
  }
`;
