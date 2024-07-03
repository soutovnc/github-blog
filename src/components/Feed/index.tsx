import { useContext, useEffect } from "react";
import { IssueContext } from "../../context/issuesContext";
import { Link } from "react-router-dom";
import { FeedContainer } from "./styles";
import { PacmanLoader } from "react-spinners";
import { Post } from "./components/Post";

export function Feed() {
  const issuesContextProps = useContext(IssueContext)
  const { issuesSearchData, fetchSearchIssueInfo, isLoadingIssuesData } = issuesContextProps

  useEffect(() => {
    fetchSearchIssueInfo()
  }, [])

  return (
    <FeedContainer>
      {isLoadingIssuesData ? (
        issuesSearchData.map((issue) => {
          return (
            <Link key={issue.number} to={`/issues/${issue.number}`}>
              <Post 
                title={issue.title}
                body={issue.body}
                created_at={issue.created_at}
              />
            </Link>
          )
        })
      ) : (
        <PacmanLoader className="loading" color="#112131" />
      )}
    </FeedContainer>
  )
}