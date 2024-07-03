import styled from "styled-components";

export const InputSearchContainer = styled.form`
  display: flex;
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 4.5rem;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.125rem;
      color: ${props => props.theme["base-subtitle"]};
      font-weight: 700;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  input {
    padding: 1rem;
    color: ${props => props.theme["base-label"]};
    background: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    color: ${props => props.theme["base-text"]};
    
    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${props => props.theme["blue"]};
      outline: none;
    }
  }
`