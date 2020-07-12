import React from 'react';

function NotFound({ location, match }) {
    console.log(match);
    return <div>404 - Not Found {location.pathname}</div>;
}

export default NotFound;
