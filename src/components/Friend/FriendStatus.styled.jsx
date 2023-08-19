import styled from '@emotion/styled';

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
