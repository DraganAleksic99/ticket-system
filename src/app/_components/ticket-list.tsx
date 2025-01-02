import Link from "next/link";
import { getSupabaseCookiesUtilClient } from "../supabase-utils/cookies-util-client";
import { TICKET_STATUS } from "../utils/constants";

export const dynamic = "force-dynamic";

export async function TicketList({
  tenant,
  pageParam,
}: {
  tenant: string;
  pageParam: string;
}) {
  const supabase = await getSupabaseCookiesUtilClient();
  let page = 1;

  if (Number.isInteger(Number(pageParam)) && Number(pageParam) > 0) {
    page = Number(pageParam);
  }

  const startingPoint = (page - 1) * 6;

  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("tenant", tenant)
    .order("status", { ascending: true })
    .order("created_at", { ascending: false })
    .range(startingPoint, startingPoint + 5);

  if (error) {
    return <h1>Could not load ticket details. Please refresh the page.</h1>;
  }

  const { count } = await supabase
    .from("tickets")
    .select("*", { count: "exact", head: true })
    .eq("tenant", tenant);

  const moreRows = count! - page * 6 > 0;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th></th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets?.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>
                <Link href={`/${tenant}/tickets/details/${ticket.id}`}>
                  {ticket.title}
                </Link>
              </td>
              <td>{TICKET_STATUS[ticket.status]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex" }}>
        {page > 1 && (
          <Link role="button" href={{ query: { page: page - 1 } }}>
            Previous page
          </Link>
        )}
        {moreRows && (
          <Link
            style={{ marginLeft: "auto" }}
            role="button"
            href={{ query: { page: page + 1 } }}
          >
            Next page
          </Link>
        )}
      </div>
    </>
  );
}
