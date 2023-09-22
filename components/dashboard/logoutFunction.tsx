'use client';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const deleteCookie = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

    useEffect(() => {
        // Usage: Call removeCookie function with the name of the cookie you want to delete
        removeCookie('accessToken');
    }, [removeCookie]);

    return <div>Deleting Cookie...</div>;
};

export default deleteCookie;
