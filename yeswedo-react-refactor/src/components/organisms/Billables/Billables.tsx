// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
// Material-UI
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { createStyles, withStyles } from '@material-ui/core/styles'
// @Emotion
import { css } from '@emotion/react'
// Custom components
import { SectionTitle } from '../../atoms'
import { parseBillables } from 'src/utils/parseBillsData'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const StyledCell = withStyles(() => 
    createStyles({
        root: {
            backgroundColor: '#2c3e50',
            color: '#fff'
        }
    })
)(TableCell)


export const Billables = (props) => {
    const [data, setData] = useState([])
    const { billsData, custData, jobsData } = props

    useEffect(() => {

        if (billsData && custData && jobsData) {
            setData(parseBillables(billsData, custData, jobsData))
        }

    },[billsData, custData, jobsData])

    const fillTable = array => {
        return array.map((bill, index) => {
            const { 
                PostingDate, 
                Activity, 
                JobAddress, 
                CustName, 
                PostedBy, 
                HourlyRate, 
                Hours, 
                TotalCharge 
            } = bill
            
            return (
                <TableRow>
                    <TableCell align='center' >{PostingDate}</TableCell>
                    <TableCell align='center' >{Activity}</TableCell>
                    <TableCell>{JobAddress}</TableCell>
                    <TableCell>{CustName}</TableCell>
                    <TableCell align='center' >{PostedBy}</TableCell>
                    <TableCell align='center' >{HourlyRate}</TableCell>
                    <TableCell align='center' >{Hours}</TableCell>
                    <TableCell align='center' >{TotalCharge}</TableCell>
                </TableRow>
            )
        })
    }

    return (
        <section css={sectionCSS}>
            <SectionTitle title='BILLABLES' />
            <Paper css={chartCSS} >
                <TableContainer component={Paper}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <StyledCell align='center' >Posting Date</StyledCell>
                                <StyledCell align='center' >Activity Type</StyledCell>
                                <StyledCell align='center' >Job Address</StyledCell>
                                <StyledCell align='center' >Customer Name</StyledCell>
                                <StyledCell align='center' >Posted By</StyledCell>
                                <StyledCell align='center' >Hourly Rate</StyledCell>
                                <StyledCell align='center' >Hours</StyledCell>
                                <StyledCell align='center' >Total Charge ($)</StyledCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fillTable(data)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </section>
    )
}

const sectionCSS = css`
    padding-bottom: 2rem;
    padding-left: 12vw;
`

const chartCSS = css`
    margin: 0 auto;
    width: 95%;
`