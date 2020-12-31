import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { SummaryCard } from '../../atoms'

const styles = makeStyles({
    summaryRow: {
        margin: '0 auto',
        width: '100%'
    }
})

export const Summary = () => {
    const classes = styles()

    return (
        <section>
            <Grid classes={{ root: classes.summaryRow }} container spacing={4} >
                <Grid item xs={3} >
                    <SummaryCard color='red' title='Test 1' type='Receipt' value={0} />
                </Grid>
                <Grid item xs={3} >
                    <SummaryCard color='blue' title='Test 2' type='Hours' value={0} />
                </Grid>
                <Grid item xs={3} >
                    <SummaryCard color='green' title='Test 3' type='Dollar' value={0} />
                </Grid>
                <Grid item xs={3} >
                    <SummaryCard color='magenta' title='Test 4' type='Customers' value={0} />
                </Grid>
            </Grid>
        </section>
    )
}