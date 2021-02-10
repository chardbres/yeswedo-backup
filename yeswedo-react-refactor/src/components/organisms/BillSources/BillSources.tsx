// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
// Material-UI component(s)
import Paper from '@material-ui/core/Paper'
// Nivo chart
import { ResponsivePie } from '@nivo/pie'
// @Emotion
import { css } from '@emotion/react'
// Custom components
import { SectionTitle } from '../../atoms'
// Helper functions
import { parseBillSources } from '../../../utils'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const BillSources = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {

        if (props.data) {
            setData(parseBillSources(props.data))
        }
        
    },[props.data])


    return (
        <section css={sectionCSS} >
            <SectionTitle title='BILL SOURCES' />
            <Paper css={chartCSS} >
                <ResponsivePie
                        data={data}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.7}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'set2' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkColor={{ from: 'color' }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor="#333333"
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 56,
                                itemsSpacing: 0,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                />
            </Paper>
        </section>
    )
}

const sectionCSS = css`
    padding-left: 12vw;
    width: 50%;
`

const chartCSS = css`
    height: 500px;
    margin: 0 auto 2rem;
    width: 90%;
`