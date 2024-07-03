import styled from "styled-components";

export const ArticleContainer = styled.article`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  p {
    color: ${props => props.theme["base-text"]};
    line-height: 160%;
  }
`