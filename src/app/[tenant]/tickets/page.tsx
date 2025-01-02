import { Suspense } from "react";
import { Params } from "next/dist/server/request/params";
import { TicketList } from "../../_components/ticket-list";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function TicketListPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { tenant } = await params;
  const { page } = await searchParams;

  return (
    <>
      <h2>Ticket List</h2>
      <Suspense
        fallback={<div aria-busy="true">Loading tickets...</div>}
        key={JSON.stringify(page)}
      >
        <TicketList tenant={tenant as string} pageParam={page as string} />
      </Suspense>
    </>
  );
}
