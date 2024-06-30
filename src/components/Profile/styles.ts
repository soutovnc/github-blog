import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 864px;
  width: 100%;
  background: ${props => props.theme["base-profile"]};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: -6rem auto 0;  
  gap: 2rem;
`;

export const Avatar = styled.div`
  .avatarImg {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]}
  }

  p {
    color: ${props => props.theme["base-text"]}
  }


`;

export const ProfileSection = styled.div`
  display: flex;
  color: ${props => props.theme["base-subtitle"]};
  gap: 1.5rem;

  .footerItem {
    display: flex;
    align-items: center;

     svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme["base-label"]};
      margin-right: 0.5rem;
     }
  }
`;


export const ProfileGithub = styled.a`
  position: relative;
  top: 0;
  right: 0;
  margin-top: 40px;
  margin-right: 2rem;
  padding-bottom: 0.25rem;
  display: flex;
  /* align-items: center; */
  gap: 0.5rem;
  color: ${props => props.theme["blue"]};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
  height: 30px;

  &:hover{
    border-bottom: 1px solid ${props => props.theme["blue"]};
  }
`;
