import { PropsWithChildren } from "react";
import { TenantName } from "../_components/tenant-name";
import { Navigation } from "../_components/navigation";

export default function TicketsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section style={{ borderBottom: "1px solid gray" }}>
        <TenantName tenantName="Dragan's Org" />
        <Navigation />
      </section>
      <section>{children}</section>
    </>
  );
}
