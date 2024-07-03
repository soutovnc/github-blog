import { Feed } from "../components/Feed";
import { InputSearch } from "../components/InputSearch";
import { Profile } from "../components/Profile";

export function Home() {
  return (
    <>
      <Profile />
      <InputSearch />
      <Feed />
    </>
  )
}