import Link from "next/link";
import { SearchParams } from "next/dist/server/request/search-params";
import { Params } from "next/dist/server/request/params";
import { urlPath } from "../../utils/url-helpers";

export default function RegistrationSuccessPage({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: Params;
}) {
  const { email } = searchParams;
  const { tenant } = params;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Registration succeeded!</h1>
      <p>Check your email ({email}) for a link to activate your account.</p>
      <br />
      <Link role="button" href={urlPath("/", tenant as string)}>
        Login
      </Link>
    </div>
  );
}
