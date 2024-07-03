import styled from "styled-components";

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${props => props.theme["base-post"]};
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    border: 2px solid ${props => props.theme["base-label"]};
  }

  header {
    display: flex;
    gap: 1rem;

    strong {
      width: 283px;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
    }

    time {
      display: flex;
      flex-shrink: 0;
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
      margin-top: 5px;
    }
  }

  p {
    color: ${props => props.theme["base-text"]};
    line-height: 160%;
    margin-top: 20px;
  }
`