import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link role="button" href="/tickets">
            Ticket List
          </Link>
        </li>
        <li>
          <Link role="button" href="/tickets/new">
            Create new Ticket
          </Link>
        </li>
        <li>
          <Link role="button" href="/tickets/users">
            User List
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link role="button" href="/logout" className="secondary">
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
