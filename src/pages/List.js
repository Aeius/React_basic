import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'ub@gmail.com',name: '유비',},
        {email: 'ub2@gmail.com',name: '유비2',},
        {email: 'ub3@gmail.com',name: '유비3',},
        {email: 'ub4@gmail.com',name: '유비4',},
    ];
    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList