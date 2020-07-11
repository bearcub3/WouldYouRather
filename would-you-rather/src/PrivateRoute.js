import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './context/auth';

export default function PrivateRoute({
    component: Component,
    render,
    ...rest
}) {
    const { authTokens } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                authTokens ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}
