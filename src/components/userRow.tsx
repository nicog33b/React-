import { User } from "../interfaces";

interface Props {
    user: User;
}


export const UserRow = ({ user }: Props) => {
    const { avatar, first_name, last_name, email } = user;
    return (
        <tr>
            <td>
                <img style={{ width: '100px', height: '100px' }} src={avatar} alt="avatar" />
            </td>
            <td>{email}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
        </tr>
    );
};