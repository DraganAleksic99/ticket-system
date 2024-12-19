import { Login } from "./_components/login";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const { magicLink } = await searchParams
  const megicLinkParamExists = magicLink === "yes";

  return <Login isPasswordLogin={!megicLinkParamExists} />;
}
