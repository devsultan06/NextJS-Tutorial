import React from "react";

export default function ComplexDashboard({
    children,
    revenue,
    users,
    notification,
    login,
}: {
    children: React.ReactNode;
    revenue: React.ReactNode;
    users: React.ReactNode;
    notification: React.ReactNode;
    login: React.ReactNode;

}) {

    const isLoggedIn = false;

    return isLoggedIn ? (
        <div>
            {children}
            <div>
                {revenue}
                {users}
                {notification}
            </div>
        </div>) : (
        <div>
            {login}
        </div>
    );
}
