// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// /** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
// Material-UI component(s)
import Paper from '@material-ui/core/Paper'
// Nivo chart
import { ResponsiveBar } from '@nivo/bar'
// @Emotion
import { css } from '@emotion/react'
// Custom components
import { SectionTitle } from '../../atoms'
// Helper functions
import { getDate, parseBillHours } from '../../../utils'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export const BillAmount = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {

        if (props.data) {
            const cleanArray = cleanData(props.data)
            setData(parseBillHours(cleanArray))
        }

    },[props.data])
    
    const cleanData = array => {
        let tempArr : any[] = []

        array.forEach(item => {
            let tempObj = {
               date: getDate(item.TimeStamp),
               duration: parseFloat(item.Time),
               activity: item.ActivityType
            }
            tempArr.push(tempObj)
        })

        tempArr.sort((a,b) => {
            return a.timestamp - b.timestamp
        })

        return tempArr
    }


    return (
        <section css={sectionCSS} >
            <SectionTitle title='HOURS BILLED PER DAY' />
            <Paper css={chartCSS} >
                <ResponsiveBar
                    data={data}
                    // keys={['AppS', 'Default', 'undefined', 'STech' ]}
                    keys={['duration']}
                    indexBy="date"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    innerPadding={3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors='#2c3e50'
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Date',
                        legendPosition: 'middle',
                        legendOffset: 32
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
                    labelTextColor='#fff'
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
    padding-left: 12vw;
`

const chartCSS = css`
    height: 500px;
    margin: 0 auto 2rem;
    width: 95%;
`