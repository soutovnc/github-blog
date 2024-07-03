import { useContext } from "react";
import { IssueContext } from "../../context/issuesContext";
import Markdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { ArticleContainer } from "./styles";

export function Article() {
  const { issuesData } = useContext(IssueContext)

  return (
    <ArticleContainer>
      <p>
        <Markdown remarkPlugins={[remarkGfm]}>{issuesData.body}</Markdown>
      </p>
    </ArticleContainer>
  )
}