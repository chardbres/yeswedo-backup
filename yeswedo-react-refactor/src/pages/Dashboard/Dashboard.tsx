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
import { addBillsData, addJobsData } from '../../api/Redux/actions'

import barData from '../../components/organisms/BillAmount/data.json'
import barData2 from '../../components/organisms/HoursByEmployee/data.json'
import pieData from '../../components/organisms/BillSources/data.json'

const Dashboard = props => {
    const [activeUser] = useState(props.activeUser.user)
    const startTime = useState(new Date('July 20, 19 00:00:00 GMT+00:00').getTime())
    const endTime = useState(Date.now())
    // Destructuring Redux functions
    const { addBillsData, addJobsData } = props

    useEffect(() => {
        const billArray : any[] = []
        const jobArray : any[] = []
        // Get bills by user and add to store
        props.firebase
            .doGetDashboardData().child('Bill Fanout').child(activeUser.uid).orderByChild('TimeStamp').startAt(startTime[0]).on('child_added', snap => {
                let bill = snap.val()
                if (billArray.length === 0) {
                    billArray.push(bill)
                }
                billArray.forEach((element, index) => {
                    element.Job === bill.Job && element.TimeStamp <= bill.TimeStamp ? billArray[index] = bill : billArray.push(bill)
                })
            })
        addBillsData(billArray)

        props.firebase
            .doGetDashboardData().child('Jobs Board Fanout').child(activeUser.uid).once('value', snap => {
                let job = snap.val()
                jobArray.push(job)
            })
        addJobsData(jobArray)
        
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
    return { 
        addBillsData: data => dispatch(addBillsData(data)),
        addJobsData: data => dispatch(addJobsData(data))
    }
}

const mapStateToProps = state => {
    return { activeUser: state.activeUser }
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

// db.collection('Bill Fanout')
//           .where('Client', '==', `${myUID}`)
//           .orderBy('TimeStamp')
//           .onSnapshot(async function (querySnapshot) {
//             var info = [];
//             querySnapshot.forEach(async function(doc) {
//               let element = doc.data();
//               console.log(element["TimeStamp"]);
//               await parseBills(element, user.uid);
//             });
//           });