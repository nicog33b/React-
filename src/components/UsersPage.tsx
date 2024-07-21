
import { UserRow } from "./userRow";
import { UseUsers } from "../hooks/useUsers";



export const UsersPage = () => {
    const { users, nextPage, prevPage } = UseUsers();

    return (
        <div>
            <h3>Users Page</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={prevPage} style={{ marginRight: '9px', color: 'blue' }}>Prev</button>
                <button onClick={nextPage} style={{ color: 'blueviolet' }}>Next</button>
            </div>
        </div>
    );
};

