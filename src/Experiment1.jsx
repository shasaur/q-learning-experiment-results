import { ResponsiveLine } from '@nivo/line'
import './graphs.css'
import part1data from './experiment1-part1-data.json'
import part2data from './experiment1-part2-data.json'
import part3data5x5 from './experiment1-part3-5x5-data.json'
import part3data7x7 from './experiment1-part3-7x7-data.json'
import part3data10x10 from './experiment1-part3-10x10-data.json'
import part3data15x15 from './experiment1-part3-15x15-data.json'

const Experiment1 = () => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Experiment 1</h2>
        <p>A simple experiment for an agent to learn to navigate to food in a map.</p>
        <h3>Part 1: Variation in learning with the same hyperparameters</h3>
        <div style={{ width: 500, height: 400, color: 'white' }}>
            <ResponsiveLine /* or Line for fixed dimensions */
                data={part1data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                axisBottom={{ 
                    legend: 'Episodes', 
                    // legendOffset: 36,
                    tickValues: [3000, 6000, 9000, 12000, 15000, 18000, 20000]
                }}
                axisLeft={{ legend: 'Average Steps per Episode', legendOffset: -40 }}
                pointSize={0}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'seriesColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
                    }
                ]}
            />
        </div>
        <h3>Part 2: Averaging 10 runs for more consistent comparisons</h3>
        <div style={{ width: 500, height: 400, color: 'white' }}>
            <ResponsiveLine /* or Line for fixed dimensions */
                data={part2data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                axisBottom={{ 
                    legend: 'Episodes', 
                    legendOffset: 36,
                    tickValues: [3000, 6000, 9000, 12000, 15000, 18000, 20000],
                }}
                axisLeft={{ legend: 'Average Steps per Episode', legendOffset: -40 }}
                pointSize={0}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'seriesColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
                    }
                ]}
            />
        </div>
        <h3>Part 3: Scaling the difficulty of the task</h3>
        <p>Trying different grid sizes to see how it affects learning. 5x5, 7x7, 10x10, 15x15</p>
        <div
        style={{flexWrap: 'wrap', width: '80vw', flexDirection: 'row', display: 'flex'}}>
            <div style={{ width: 500, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data5x5}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [3000, 6000, 9000, 12000, 15000, 18000, 20000],
                    }}
                    axisLeft={{ legend: 'Average Steps per Episode', legendOffset: -40 }}
                    pointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'seriesColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            translateX: 100,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 500, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data7x7}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [3000, 6000, 9000, 12000, 15000, 18000, 20000],
                    }}
                    axisLeft={{ legend: 'Average Steps per Episode', legendOffset: -40 }}
                    pointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'seriesColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            translateX: 100,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 500, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data10x10}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [3000, 6000, 9000, 12000, 15000, 18000, 20000],
                    }}
                    axisLeft={{ legend: 'Average Steps per Episode', legendOffset: -40 }}
                    pointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'seriesColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            translateX: 100,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 500, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data15x15}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [3000, 6000, 9000, 12000, 15000, 18000, 20000],
                    }}
                    axisLeft={{ legend: 'Average Steps per Episode', legendOffset: -40 }}
                    pointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'seriesColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            translateX: 100,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
        </div>
    </div>
)

export default Experiment1;