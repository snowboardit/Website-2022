import { keyframes } from "@emotion/react";

module.exports.revealFadeUp = keyframes`
  from {
    transform: translate3d(0, 20%, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0);
    opacity: 100;
  }
`;

module.exports.revealFadeLeft = keyframes`
  from {
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0);
    opacity: 100;
  }
`;
