import Link from "next/link";

type Ticket = {
  id: number;
  title: string;
  status: string;
  author: string;
};

export function TicketList({ tickets, tenant }: { tickets: Ticket[], tenant: string }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td><Link href={`/${tenant}/tickets/details/${ticket.id}`}>{ticket.title}</Link></td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
