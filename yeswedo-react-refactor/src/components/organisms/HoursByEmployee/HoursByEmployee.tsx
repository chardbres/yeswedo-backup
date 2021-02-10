// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
// Material-UI component(s)
import Paper from '@material-ui/core/Paper'
// Nivo chart
import { ResponsiveBar } from '@nivo/bar'
// @Emotion
import { css } from '@emotion/react'
// Custom components
import { SectionTitle } from '../../atoms'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export const HoursByEmployee = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {

        const hoursObj = {
            'name': '',
            'hours': 0
        }

        hoursObj.name = props.user

        if (props.data) {
            
            props.data.forEach(item => {
                let duration = parseFloat(item.Time)
                hoursObj.hours+= duration
            })
            setData([hoursObj])
        }


    },[props.data])

    return (
        <section css={sectionCSS} >
            <SectionTitle title='HOURS BY EMPLOYEE' />
            <Paper css={chartCSS} >
                <ResponsiveBar
                    data={data}
                    keys={[ 'hours' ]}
                    indexBy='name'
                    margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
                    padding={0.6}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors='#ffca18'
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Name',
                        legendPosition: 'middle',
                        legendOffset: 40
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Hours',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelFormat='.1f'
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    // legends={[
                    //     {
                    //         dataFrom: 'keys',
                    //         anchor: 'bottom-right',
                    //         direction: 'column',
                    //         justify: false,
                    //         translateX: 120,
                    //         translateY: 0,
                    //         itemsSpacing: 2,
                    //         itemWidth: 100,
                    //         itemHeight: 20,
                    //         itemDirection: 'left-to-right',
                    //         itemOpacity: 0.85,
                    //         symbolSize: 20,
                    //         effects: [
                    //             {
                    //                 on: 'hover',
                    //                 style: {
                    //                     itemOpacity: 1
                    //                 }
                    //             }
                    //         ]
                    //     }
                    // ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </Paper>
        </section>
    )
}

const sectionCSS = css`
    width: 50%;
`

const chartCSS = css`
    height: 500px;
    margin: 0 auto 2rem;
    width: 90%;
`