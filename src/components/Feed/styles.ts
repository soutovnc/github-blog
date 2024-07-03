import styled from "styled-components";

export const FeedContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 48px;
  padding-bottom: 234px;
  gap: 2rem;

  a {
    text-decoration: none;
  }

  .loading {
    grid-column: span 2;
    justify-content: center;
    justify-self: center;
  }
`