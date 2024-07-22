import { RepoProps } from "../types/Repo"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"

export const Repo = ({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
}: RepoProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash />
                {language}
            </p>
            <div>
                <div>
                    <AiOutlineStar />
                    {stargazers_count}
                </div>
                <div>
                    <AiOutlineFork />
                    {forks_count}
                </div>
            </div>
            <a href={html_url} target="_blank">
                <span>Ver código</span>
            </a>
            <RiGitRepositoryLine />
        </div>
  )
}
