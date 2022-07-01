import React, { FC, ReactElement } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

type PropsType = {
    children?: never
}

export const Navbar: FC<PropsType> = (): ReactElement => {
    return (
        <>
            <nav className="container flex justify-between p-4 mx-auto lg:w-screen-lg">
                <Link to="/" className="w-full">
                    <img src="/logo.svg" alt="React Query" width="200" />
                </Link>
                <div className="flex">
                    <NavLink to="/">Basic</NavLink>
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/paginated">Paginated</NavLink>
                    <NavLink to="/infinite">Infinite</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar