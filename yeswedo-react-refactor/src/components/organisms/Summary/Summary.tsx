/** @jsxImportSource @emotion/react */
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { SectionTitle, SummaryCard } from '../../atoms'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const styles = makeStyles({
    summaryRow: {
        borderBottom: '3px solid #2c3e50',
        margin: '0 auto',
        padding: '0 2rem 1rem',
        width: '84vw'
    }
})

const Summary = (props) => {
    const classes = styles()
    const billsDataLength = useSelector(state => state.dashboardData.billsCount)
    const billsData = useSelector(state => state.dashboardData.billsData)

    const [data, setData] = useState({
        billsCount: 0,
        bills: []
    })

    useEffect(() => {
        setData(data => ({...data, billsCount: billsDataLength}))
        setData(data => ({...data, bills: billsData }))
    },[billsData, billsDataLength])

    return (
        <Fragment> 
            <section css={summaryCSS} >
                <SectionTitle title='SUMMARY' />
                    <Grid key={data.billsCount} classes={{ root: classes.summaryRow }} container spacing={4} >
                        <Grid item xs={3} >
                            <SummaryCard color='#4E73DF' title='NUMBER OF BILLS' type='Receipt' value={data.billsCount} />
                        </Grid>
                        <Grid item xs={3} >
                            <SummaryCard color='#f6c23e' title='HOURS BILLED' type='Hours' value={data.billsCount} />
                        </Grid>
                        <Grid item xs={3} >
                            <SummaryCard color='#1CC88A' title='TOTAL EXPENSES' type='Dollar' value={data.billsCount} />
                        </Grid>
                        <Grid item xs={3} >
                            <SummaryCard color='#E74A3B' title='CUSTOMERS SERVED' type='Customers' value={data.billsCount} />
                        </Grid>
                    </Grid>
            </section>
        </Fragment>
    )
}

export default Summary

Summary.propTypes = {
    user: PropTypes.any
}

const summaryCSS = css`
    margin-bottom: 2rem;
    padding: 8vh 0 0 12vw;
`