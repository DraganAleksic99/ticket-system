import { IconCheck, IconUserOff } from "@tabler/icons-react";

const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
];

export default function UserList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td style={{ color: !user.isAvailable ? "red" : undefined, display: "flex", gap: '8px' }}>
              {user.isAvailable ? <IconCheck /> : <IconUserOff />} {user.name}
            </td>
            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
