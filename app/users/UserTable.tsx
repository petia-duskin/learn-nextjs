import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
}

type SortColumn = keyof Omit<User, 'id'>;

interface Props {
    sortOrder: SortColumn;
}

const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'});
    const users: User[] = await res.json();

    const sortUsers = (column: SortColumn) => {
        if (column == null || column.length === 0) {
            return;
        }
        users.sort((user1, user2) => {
            return user1[column].localeCompare(user2[column])
        });
    }

    sortUsers(sortOrder);

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th><Link href="/users?sortOrder=name">Name</Link></th>
                <th><Link href="/users?sortOrder=email">Email</Link></th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable;