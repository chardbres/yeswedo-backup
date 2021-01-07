/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { Header, Menu } from '../../components/organisms'
import { Billables, BillAmount, BillSources, HoursByEmployee } from '../../components/organisms'
import { Summary } from '../../components/organisms'
import { css } from '@emotion/react'

import barData from '../../components/organisms/BillAmount/data.json'
import barData2 from '../../components/organisms/HoursByEmployee/data.json'
import pieData from '../../components/organisms/BillSources/data.json'

const Dashboard = props => {
    const [user] = useState(props)

    useEffect(() => {
        console.log(user)
    })

    return (
        <div>
            <div css={canvasCSS} >
                <Menu />
                <Header title='Dashboard' user='Test User' />
                <Summary />
                <BillAmount data={barData} />
                <div css={detailCSS}>
                    <BillSources data={pieData} />
                    <HoursByEmployee data={barData2} />
                </div>
                <Billables />
            </div>
        </div>
    )
}

export default Dashboard

const canvasCSS = css`
    background-color: #dcdcdc;
`

const detailCSS = css`
    align-items: center;
    display: flex;
    flex-direction: row;
`