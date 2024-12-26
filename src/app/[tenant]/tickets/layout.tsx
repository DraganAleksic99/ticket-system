import { PropsWithChildren } from "react";
import { TenantName } from "../../_components/tenant-name";
import { Navigation } from "../../_components/navigation";
import { Params } from "next/dist/server/request/params";

export default async function TicketsLayout({
  children,
  params,
}: PropsWithChildren & { params: Params }) {
  const { tenant } = await params

  return (
    <>
      <section style={{ borderBottom: "1px solid gray" }}>
        <TenantName tenant={tenant as string} />
        <Navigation tenant={tenant as string} />
      </section>
      <section>{children}</section>
    </>
  );
}
