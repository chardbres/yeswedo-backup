/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { createStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { SectionTitle } from '../../atoms'

const StyledCell = withStyles(() => 
    createStyles({
        head: {
            backgroundColor: '#2c3e50',
            color: '#fff'
        }
    })
)(TableCell)

export const Billables = () => {
    
    return (
        <section css={sectionCSS}>
            <SectionTitle title='BILLABLES' />
            <TableContainer style={{ margin: 'auto', width: '90% '}} component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <StyledCell>Posting Date</StyledCell>
                            <StyledCell>Activity Type</StyledCell>
                            <StyledCell>Job Address</StyledCell>
                            <StyledCell>Customer Name</StyledCell>
                            <StyledCell>Posted By</StyledCell>
                            <StyledCell>Hourly Rate</StyledCell>
                            <StyledCell>Hours</StyledCell>
                            <StyledCell>Total Charge ($)</StyledCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}

const sectionCSS = css`
    padding-left: 12vw;
`