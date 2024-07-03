import { useContext, useEffect } from "react";
import { IssueContext } from "../../context/issuesContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Skeleton from "react-loading-skeleton";
import { FooterContent, PostInfoContainer } from "./styles";

export function PostInfo() {
  const { fetchIssuesData, issuesData } = useContext(IssueContext)
  const { issueNumber } = useParams()

  useEffect(() => {
    fetchIssuesData(issueNumber)
  }, []);

  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <div className="wrapper">
            <FontAwesomeIcon icon={faChevronLeft}/>
            <span>Voltar</span>
          </div>
        </Link>

        <a href={issuesData.html_url} target="_blank" rel="noreferrer">
          <div className="wrapper">
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </div>
        </a>

      </header>

      <strong>{issuesData.title}</strong>
      <FooterContent>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faGithub} />
          <span>{issuesData.user?.login}</span>
        </div>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faCalendarDay} />
          <time>
            {issuesData.created_at ? (
              <>
                {formatDistanceToNow(new Date(issuesData.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </>
            ) : (
              <Skeleton />
            )}
          </time>
        </div>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faComment} />
          <time>{issuesData.title ? issuesData.comments : <Skeleton />}</time> 
        </div>
      </FooterContent>
    </PostInfoContainer>
  )

}