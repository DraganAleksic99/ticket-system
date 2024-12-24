import { Login } from "./_components/login";
import { SearchParams } from "next/dist/server/request/search-params";
import { FormType } from "./_components/login";

type FormTypeValues = `${FormType}`;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { magicLink, passwordRecovery } = await searchParams;
  const wantsMagicLink = magicLink === "yes";
  const wantsPasswordRecovery = passwordRecovery === "yes";

  let formType= "pw-login";

  if (wantsMagicLink) {
    formType = "magic-link";
  } else if (wantsPasswordRecovery) {
    formType = "recovery";
  }

  return <Login formType={formType} />;
}
