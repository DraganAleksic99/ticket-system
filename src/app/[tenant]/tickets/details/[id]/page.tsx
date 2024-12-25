import { SearchParams } from "next/dist/server/request/search-params";
import { TicketComments } from "@/app/_components/ticket-comments";

export default function TicketDetailsPage({
  params,
}: {
  params: SearchParams;
}) {
  return (
    <article className="ticketDetails">
      <header>
        <strong>#{params.id}</strong> -{" "}
        <strong className="ticketStatusGreen">Open</strong>
        <br />
        <small className="authorAndDate">
          Created by <strong>AuthorName</strong> at{" "}
          <time>December 10th 2025</time>
        </small>
        <h2>Ticket title should be here</h2>
      </header>
      <section>Some details about the ticket should be here.</section>
      <TicketComments />
    </article>
  );
}
