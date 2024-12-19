import { Login } from "./_components/login";
import { SearchParams } from "next/dist/server/request/search-params";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const megicLinkParamExists = searchParams.magicLink === "yes";

  return <Login isPasswordLogin={!megicLinkParamExists} />;
}
