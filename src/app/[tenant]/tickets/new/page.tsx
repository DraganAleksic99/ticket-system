import { Params } from "next/dist/server/request/params";
import NewTicketForm from "@/app/_components/new-ticket-form";

export default async function CreateTicket({ params }: { params: Params }) {
  const { tenant } = await params;

  return <NewTicketForm tenant={tenant as string} />;
}
