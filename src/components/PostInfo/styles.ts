import styled from "styled-components";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 168px;
  padding: 2rem;
  gap: 0.5rem;
  background: ${props => props.theme["base-profile"]};
  margin-top: -6rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    svg {
      color: ${props => props.theme["base-blue"]};
    }

    span {
      color: ${props => props.theme["base-blue"]};
    }

    a {
      text-decoration: none;
    }
  }

  strong {
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
    font-weight: 700;
    line-height: 130%;
  }
  
  .wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;
    transition: border-bottom 0.2s;

    &:hover {
      border-bottom: 1px solid ${props => props.theme["base-blue"]};
    }
  }
`;

export const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: auto;

  .userInfoFooterItem {
    display: flex;
    align-items: center;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme["base-label"]};
      margin-right: 0.5rem;
    }

    span,
    time {
      color: ${props => props.theme["base-span"]};
      min-width: 100px;
    }
  }
`