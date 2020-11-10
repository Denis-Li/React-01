import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function Users() {
    let match = useRouteMatch();
    return(
        <>
            <h2>Users</h2>
            <ul>
                <li><a href={`${match.url}/admin`}>Admin</a></li>
                <li><a href={`${match.url}/tester`}>Tester</a></li>
            </ul>
        </>
    );
}

export default Users;