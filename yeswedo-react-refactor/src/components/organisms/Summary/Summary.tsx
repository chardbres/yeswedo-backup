/** @jsxImportSource @emotion/react */
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { SectionTitle, SummaryCard } from '../../atoms'
import { css } from '@emotion/react'

const styles = makeStyles({
    summaryRow: {
        borderBottom: '3px solid #2c3e50',
        margin: '0 auto',
        padding: '0 2rem 1rem',
        width: '84vw'
    }
})

export const Summary = () => {
    const classes = styles()

    return (
        <section css={summaryCSS} >
            <SectionTitle title='SUMMARY' />
            <Grid classes={{ root: classes.summaryRow }} container spacing={4} >
                <Grid item xs={3} >
                    <SummaryCard color='#4E73DF' title='NUMBER OF BILLS' type='Receipt' value={0} />
                </Grid>
                <Grid item xs={3} >
                    <SummaryCard color='#f6c23e' title='HOURS BILLED' type='Hours' value={0} />
                </Grid>
                <Grid item xs={3} >
                    <SummaryCard color='#1CC88A' title='TOTAL EXPENSES' type='Dollar' value={0} />
                </Grid>
                <Grid item xs={3} >
                    <SummaryCard color='#E74A3B' title='CUSTOMERS SERVED' type='Customers' value={0} />
                </Grid>
            </Grid>
        </section>
    )
}

const summaryCSS = css`
    margin-bottom: 2rem;
    padding: 8vh 0 0 12vw;
`