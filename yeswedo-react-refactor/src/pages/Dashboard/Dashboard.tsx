/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withFirebase } from '../../api/Firebase'
import { Header, Menu } from '../../components/organisms'
import { Billables, BillAmount, BillSources, HoursByEmployee } from '../../components/organisms'
import { Summary } from '../../components/organisms'
import { css } from '@emotion/react'

import { addData } from '../../api/Redux/actions'

import barData from '../../components/organisms/BillAmount/data.json'
import barData2 from '../../components/organisms/HoursByEmployee/data.json'
import pieData from '../../components/organisms/BillSources/data.json'

const Dashboard = props => {
    const [activeUser] = useState(props.user.user)
    const curTime = new Date().toLocaleString()
    const { addData } = props

    useEffect(() => {
        const dataArray : any[] = []
        
        props.firebase
            .doGetDashboardData().child('Bill Fanout').child(activeUser.uid).orderByChild('TimeStamp').startAt(curTime).on('child_added', snap => {
                dataArray.push(snap.val())
            })
        addData(dataArray)
    },[])

    return (
        <div>
            <div css={canvasCSS} >
                <Menu />
                <Header title='Dashboard' user={activeUser.name} />
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

const mapDispatchToProps = dispatch => {
    return { addData: data => dispatch(addData(data))}
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default compose(
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard)

const canvasCSS = css`
    background-color: #dcdcdc;
`

const detailCSS = css`
    align-items: center;
    display: flex;
    flex-direction: row;
`