import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
}

type SortColumn = 'name' | 'email'

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'});
    const users: User[] = await res.json();

    const sortUsers = (column: string) => {
        let columnName: SortColumn = column === 'name' || column === 'email' ? column : 'name';
        users.sort((user1, user2) => {
            return user1[columnName].localeCompare(user2[columnName])
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