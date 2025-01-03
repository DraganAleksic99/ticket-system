import Link from "next/link";
import { getSupabaseCookiesUtilClient } from "../supabase-utils/cookies-util-client";
import { TICKET_STATUS } from "../utils/constants";

export const dynamic = "force-dynamic";

export async function TicketList({
  tenant,
  pageParam,
  searchParam,
}: {
  tenant: string;
  pageParam: string;
  searchParam: string;
}) {
  const supabase = await getSupabaseCookiesUtilClient();
  let page = 1;
  const searchValue = searchParam?.trim();

  if (Number.isInteger(Number(pageParam)) && Number(pageParam) > 0) {
    page = Number(pageParam);
  }

  const startingPoint = (page - 1) * 6;

  let ticketsStatement = supabase
    .from("tickets")
    .select("*")
    .eq("tenant", tenant);

  let countStatement = supabase
    .from("tickets")
    .select("*", { count: "exact", head: true })
    .eq("tenant", tenant);

  if (searchValue) {
    const cleanSearchString = searchValue
      .replaceAll('"', "")
      .replaceAll("\\", "")
      .replaceAll("%", "");

    const postgrestSearchValue = '"%' + cleanSearchString + '%"';
    const postgrestFilterString =
      `title.ilike.${postgrestSearchValue}` +
      `, description.ilike.${postgrestSearchValue}`;

    countStatement = countStatement.or(postgrestFilterString)
    ticketsStatement = ticketsStatement.or(postgrestFilterString);
  }

  ticketsStatement = ticketsStatement
  .order("status", { ascending: true })
  .order("created_at", { ascending: false })
  .range(startingPoint, startingPoint + 5);

  const { count } = await countStatement;
  const { data: tickets } = await ticketsStatement;

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
            href={{ query: { page: page + 1, search: searchParam } }}
          >
            Next page
          </Link>
        )}
      </div>
    </>
  );
}
