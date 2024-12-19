import Link from "next/link";

type Ticket = {
  id: number;
  title: string;
  status: string;
  author: string;
};

export function TicketList({ tickets }: { tickets: Ticket[] }) {
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
            <td><Link href={`/tickets/details/${ticket.id}`}>{ticket.title}</Link></td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
