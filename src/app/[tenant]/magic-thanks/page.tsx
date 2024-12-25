import { Params } from "next/dist/server/request/params";
import Link from "next/link";
import { urlPath } from "@/app/utils/url-helpers";

export default async function MagicLinkSuccessPage({ params }: { params: Params}) {
  const { tenant } = await params;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Magic on its way!</h1>
      Thanks! You should get a link to login in a few seconds.
      <br />
      <br />
      <Link role="button" href={urlPath("/", tenant as string)}>
        Go back.
      </Link>
    </div>
  );
}
