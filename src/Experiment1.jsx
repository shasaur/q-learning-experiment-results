import { ResponsiveLine } from '@nivo/line'
import './graphs.css'
import part1data from './experiment1-part1-data.json'
import part2data from './experiment1-part2-data.json'

const Experiment1 = () => (
    <div>
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
    </div>
)

export default Experiment1;