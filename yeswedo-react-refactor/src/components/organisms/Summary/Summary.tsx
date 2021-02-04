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

    const [data, setData] = useState({
        billsCount: 0,
        hoursBilled: 0,
        totalExpenses: 0,
        customers: 0
    })

    useEffect(() => {
        setData(data => ({...data,
            billsCount: props.dashboardData.billsCount,
            hoursBilled: calcHours(props.dashboardData.billsData),
            totalExpenses: calcExpenses(props.dashboardData.billsData),
            customers: props.dashboardData.customerCount
        }))
    },[props.dashboardData])

    const calcHours = array => {
        let hours = 0
        if (array !== undefined) {
            array.forEach(item => {
                let time = parseFloat(item.Time)
                hours+= time
            })
            return parseFloat(hours.toFixed(1))
        }
    }

    const calcExpenses = array => {
        let expenses = 0
        if (array !== undefined) {
            array.forEach(item => {
                let rate = parseInt(item.Rate, 10)
                let time = parseFloat(item.Time)
                expenses+= rate * time
            })
            return parseFloat(expenses.toFixed(2))
        }
    }

    return (
        <Fragment> 
            <section css={summaryCSS} >
                <SectionTitle title='SUMMARY' />
                    <Grid key={data.billsCount} classes={{ root: classes.summaryRow }} container spacing={4} >
                        <Grid item xs={3} >
                            <SummaryCard color='#4E73DF' title='NUMBER OF BILLS' type='Receipt' value={data.billsCount} />
                        </Grid>
                        <Grid item xs={3} >
                            <SummaryCard color='#f6c23e' title='HOURS BILLED' type='Hours' value={data.hoursBilled} />
                        </Grid>
                        <Grid item xs={3} >
                            <SummaryCard color='#1CC88A' title='TOTAL EXPENSES' type='Dollar' value={data.totalExpenses} />
                        </Grid>
                        <Grid item xs={3} >
                            <SummaryCard color='#E74A3B' title='CUSTOMERS SERVED' type='Customers' value={data.customers} />
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