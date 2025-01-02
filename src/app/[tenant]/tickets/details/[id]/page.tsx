import { notFound } from "next/navigation";
import { SearchParams } from "next/dist/server/request/search-params";
import { TicketComments } from "@/app/_components/ticket-comments";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";
import { TICKET_STATUS } from "@/app/utils/constants";

export default async function TicketDetailsPage({
  params,
}: {
  params: SearchParams;
}) {
  const supabase = await getSupabaseCookiesUtilClient();
  const { id } = await params;

  const { data: ticket, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error) return notFound();

  const { created_at, title, description, status, author_name } = ticket;

  const dateString = new Date(created_at).toLocaleString("en-US");

  return (
    <article className="ticketDetails">
      <header>
        <strong>#{id}</strong> -{" "}
        <strong className="ticketStatusGreen">{TICKET_STATUS[status]}</strong>
        <br />
        <small className="authorAndDate">
          Created by <strong>{author_name}</strong> at <time>{dateString}</time>
        </small>
        <h2>{title}</h2>
      </header>
      <section>{description}</section>
      <TicketComments />
    </article>
  );
}
