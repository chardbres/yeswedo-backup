/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withFirebase } from '../../api/Firebase'
import { Header, Menu } from '../../components/organisms'
import { 
    Billables, 
    BillAmount, 
    BillSources, 
    HoursByEmployee 
} from '../../components/organisms'
import { Summary } from '../../components/organisms'
import { css } from '@emotion/react'

// Redux functions
import { addBillsData, addCustomerData, addJobsData, addWorkerData } from '../../api/Redux/actions'

import barData from '../../components/organisms/BillAmount/data.json'
import barData2 from '../../components/organisms/HoursByEmployee/data.json'
import pieData from '../../components/organisms/BillSources/data.json'

const Dashboard = props => {
    const [activeUser] = useState(props.activeUser.user)
    const [tempBillsData, setTempBillsData] = useState(null)
    // const startTime = useState(new Date('July 20, 19 00:00:00 GMT+00:00').getTime())
    // const endTime = useState(Date.now())
    // Destructuring Redux functions
    const { addBillsData, addCustomerData, addJobsData, addWorkerData } = props

    useEffect(() => {
        async function getBillsData() {
            props.firebase.doGetBillsData(activeUser.uid)
        }

        async function getCustomerData() {
            props.firebase.doGetCustomerData(activeUser.uid)
        }

        async function getJobsData() {
            props.firebase.doGetJobsData(activeUser.uid)
        }

        async function getWorkerData() {
            props.firebase.doGetWorkerData(activeUser.uid)
        }

        if (tempBillsData === null) {
            getBillsData()
                .then(() => setTempBillsData(props.firebase.returnData('bills')))
        } else if (tempBillsData !== null) {
            addBillsData(tempBillsData)
            getJobsData()
                .then(() => addJobsData(props.firebase.returnData('jobs')))
            getCustomerData()
                .then(() => addCustomerData(props.firebase.returnData('customers')))
            getWorkerData()
                .then(() => addWorkerData(props.firebase.returnData('worker')))
        }

    },[tempBillsData])

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
    return { 
        addBillsData: data => dispatch(addBillsData(data)),
        addCustomerData: data => dispatch(addCustomerData(data)),
        addJobsData: data => dispatch(addJobsData(data)),
        addWorkerData: data => dispatch(addWorkerData(data))
    }
}

const mapStateToProps = state => {
    return { 
        activeUser: state.activeUser
    }
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
