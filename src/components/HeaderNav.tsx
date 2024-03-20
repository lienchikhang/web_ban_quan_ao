import React, { useEffect } from 'react'
import headerConstants from '../constants/header.constrants'

const HeaderNav: React.FC = () => {

    //call api get type
    useEffect(() => {

    }, [])

    return (
        <ul className='hidden lg:flex ml-7 flex-1'>
            {headerConstants.navPrimaryList.map((item, index) => (
                <li key={index} className={`px-4 py-8 w-1/${headerConstants.navPrimaryList.length} transition-all hover:bg-zinc-700`}>
                    <p className='text-white text-md font-medium text-center'>{item.toUpperCase()}</p>
                </li>
            ))}
        </ul>
    )
}

export default HeaderNav