// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** @jsxImportSource @emotion/react */
import React from 'react'
// Redux
import { useSelector } from 'react-redux'
// @Emotion
import { css } from '@emotion/react'
// Custom components
import { 
    Billables, 
    BillAmount, 
    BillSources,
    Header,
    HoursByEmployee,
    Menu,
    Summary 
} from '../../components/organisms'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



import barData2 from '../../components/organisms/HoursByEmployee/data.json'

const Dashboard = props => {
    let activeUser = useSelector(state => state.activeUser.user)
    let dashboardData = useSelector(state => state.dashboardData)

    return (
        <div>
            <div css={canvasCSS} >
                <Menu />
                <Header title='Dashboard' user={activeUser.name} />
                <Summary dashboardData={dashboardData} />
                <BillAmount data={dashboardData.billsData} />
                <div css={detailCSS}>
                    <BillSources data={dashboardData.billsData} />
                    <HoursByEmployee data={dashboardData.billsData} user={activeUser.name} />
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
