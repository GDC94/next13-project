import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const shimmer = keyframes`
  to {
    background-position-x: -20%;
  }
`;

export const SkeletonEffect = styled.span`
  width: 200px;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.white}08;
  display: flex;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  flex: 0 0 auto;
  z-index: 5;
  position: relative;
  overflow: hidden;

  &::after {
    width: 100%;
    height: 100%;
    content: " ";
    position: absolute;

    animation-name: ${shimmer};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 70%
    );
    background-size: 200% 100%;
    background-position-x: 180%;

    background-clip: border-box;
  }

  &.circle {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 100%;
  }

  &.rectangle {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
