
// import React, { useState } from 'react';
// import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';


import { Landing, LandingList } from './style'

import { IoMdSettings } from 'react-icons/io';
import { AiOutlineBarChart } from 'react-icons/ai';
import { IoBarChartSharp } from 'react-icons/io5';
import { RiFileTextLine } from 'react-icons/ri';
import { ImEarth } from 'react-icons/im';
import { FcDataConfiguration } from 'react-icons/fc';



// import   "./style.css"
type Props = {
    children: any
}

const View: React.FC<Props> = ({ children }: Props) => {

    const data = [
        {
            id: 1,
            icon: <IoMdSettings style={{ width: "30px", height: "30px" }} title="viz Settings" color='grey' />,
            path: '/vizSettings'
        },
        {
            id: 2,
            icon: <AiOutlineBarChart style={{ width: "30px", height: "30px" }} title="trellis Charts" color='grey' />,
            path: '/trellisCharts'
        },
        {
            id: 3,
            icon: <IoBarChartSharp style={{ width: "30px", height: "30px" }} title='common Charts' color='grey' />,
            path: '/commonCharts'
        },
        {
            id: 4,
            icon: <RiFileTextLine style={{ width: "30px", height: "30px" }} title="report Types" color='grey' />,
            path: '/reportTypes'

        },
        {
            id: 5,
            icon: <ImEarth style={{ width: "30px", height: "30px" }} title="geo Charts" color='grey' />,
            path: '/geoCharts'

        },
        {
            id: 6,
            icon: <FcDataConfiguration style={{ width: "30px", height: "30px" }} title='drill Configuration ' color='grey' />,
            path: '/drillConfiguration'

        }
    ]

    const linkActive = 'SidebarLink active';
    const link = 'SidebarLink';
    return (

        <Landing /* siddiq*/ >
            <LandingList>
                {
                    data.map((item) => (
                        <NavLink to={item.path} key={item.id} className={({ isActive }) => isActive ? linkActive : link}>

                            <div>{item.icon}</div>
                        </NavLink>
                    ))
                }
            </LandingList>
            <div className='siddiq' style={{ width: '270px' ,height:"100%" }}>
                {children}
            </div>
        </Landing>

    )

}
export default View;