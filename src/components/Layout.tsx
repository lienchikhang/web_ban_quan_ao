import React from 'react'
import { ILayoutChildren } from '../interfaces/layout.interface'
import { Footer, Header } from '.'

const Layout: React.FC<ILayoutChildren> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout