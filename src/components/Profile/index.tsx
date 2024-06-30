import { useEffect, useState } from "react";
import { Avatar, ProfileContainer, ProfileContent, ProfileGithub, ProfileSection } from "./styles";
import { api } from "../../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

interface User {
  name: string;
  login: string;
  followers: number;
  company: string;
  bio: string;
  html_url: string;
  avatar_url: string;
}

export function Profile() {
  const [ userInfo, setUserInfo ] = useState<User>({} as User)

  async function fetchUserInfo() {
    const response = await api.get('/users/soutovnc')

    setUserInfo(response.data)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <Avatar>
        <img src={userInfo.avatar_url} alt="" className="avatarImg"/>
      </Avatar>
      <ProfileContent>
        <h1>{userInfo.name}</h1>
        <p>{userInfo.bio}</p>

        <ProfileSection>
          <div className="footerItem">
            <FontAwesomeIcon icon={faGithub}/>
            <span>{userInfo.login}</span>
          </div>
          <div className="footerItem">
            <FontAwesomeIcon icon={faBuilding}/>
            <span>{userInfo.company}</span>
          </div>
          <div className="footerItem">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userInfo.followers}</span>
          </div>
        </ProfileSection>
      </ProfileContent>

      <ProfileGithub href={userInfo.html_url} target="_blank">
        <span>Github</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
      </ProfileGithub>
    </ProfileContainer>
  )
}