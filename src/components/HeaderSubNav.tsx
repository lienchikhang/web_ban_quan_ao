import React, { } from 'react'
import { IHeaderSubNav } from '../interfaces/layout.interface'

const HeaderSubNav: React.FC<IHeaderSubNav> = ({ show }) => {

    return (
        <div className='subNav:hidden absolute top-full left-0 z-10 h-[500px] w-full bg-red-300'>HeaderSubNav</div>
    )
}

export default HeaderSubNav