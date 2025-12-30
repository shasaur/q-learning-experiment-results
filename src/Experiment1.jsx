import { ResponsiveLine } from '@nivo/line'
import './graphs.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Data
import part1data from './experiment1-part1-data.json'

import part2data from './experiment1-part2-data.json'

import part3data5x5 from './experiment1-part3-5x5-data.json'
import part3data7x7 from './experiment1-part3-7x7-data.json'
import part3data10x10 from './experiment1-part3-10x10-data.json'
import part3data15x15 from './experiment1-part3-15x15-data.json'

import part4data5x5 from './experiment1-part4-5x5-data.json'
import part4data7x7 from './experiment1-part4-7x7-data.json'
import part4data10x10 from './experiment1-part4-10x10-data.json'
import part4data15x15 from './experiment1-part4-15x15-data.json'

import part5data from './experiment1-part5-data.json'
import part6data from './experiment1-part6-data.json'

const equation1 = `target = reward + gamma * np.max(q_table[next_state])
q_table[state, action] = q_table[state, action] + alpha * (target - q_table[state, action])`

const Experiment1 = () => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Experiment 1 - Basic Q-Learning</h2>
        <p>A simple experiment for an agent to learn to navigate to food in a map.</p>
        <SyntaxHighlighter language="python" style={oneDark} customStyle={{fontSize: '14px', margin: '10px 0'}}>
            {equation1}
        </SyntaxHighlighter>
        <ul>
            <li>
                For every possible state, and for every possible action in that state, we store a value in the q-table.
            </li>
            <li>
                Our reward is not only what we receive at which step, but also the new rewards taking that step will unlock (i.e. what the new actions in that state will give as a reward)
            </li>
        </ul>
        <h3>Part 1.1: Variation in learning with the same hyperparameters</h3>
        <div style={{ width: 370, height: 400, color: 'white' }}>
            <ResponsiveLine /* or Line for fixed dimensions */
                data={part1data}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                        // Inside the graph in its top right corner
                        anchor: 'top-right',
                        direction: 'column',
                        translateX: 0,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
                    }
                ]}
            />
        </div>
        <h3>Part 1.2: Averaging 10 runs for more consistent comparisons</h3>
        <div style={{ width: 370, height: 400, color: 'white' }}>
            <ResponsiveLine /* or Line for fixed dimensions */
                data={part2data}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                        anchor: 'top-right',
                        direction: 'column',
                        translateX: 0,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
                    }
                ]}
            />
        </div>
        <h3>Part 1.3: Scaling the difficulty of the task</h3>
        <p>Trying different grid sizes to see how it affects learning. 5x5, 7x7, 10x10, 15x15</p>
        <div
        style={{flexWrap: 'wrap', width: '80vw', flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data5x5}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data7x7}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data10x10}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part3data15x15}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
        </div>
        <h3>Conclusions</h3>
        <p>
            Tabular Q-learning is bad at generalizing to unknown situations and hence scaling learning to larger grid sizes takes exponentially longer.
            This is my impression, however, it could be tested as a standalone experiment where some positions are deliberately not included in the training set.
        </p>
        <h2>Experiment 2 - Deep Q-Learning</h2>
        <p>Trying out deep q-learning and comparing the performance of against standard tabular q-learning.</p>
        <ul>
            <li>The table is replaced with a function / network</li>
            <li><b>Target network:</b> needed to stabilise learning because a Q-network tries to predict both the current and future rewards, which can cause rapid shifting in rewards. A target network is essentially a copy of the Q-network that is updated less frequently. Without target networks, DQN often fails to learn effective policies, as the Q-value estimates diverge due to rapidly shifting targets.</li>
            <li><b>Experience replay buffer:</b> tracks all the actions taken and the rewards received</li>
        </ul>
        <p>Useful resources:</p>
        <ul>
            <li><a href="https://milvus.io/ai-quick-reference/what-are-target-networks-in-dqn">Target networks</a></li>
            <li><a href="https://www.youtube.com/watch?v=x83WmvbRa2I">Deep Q-Learning</a></li>
        </ul>
        <h3>Part 2.1: Comparing Deep Q-Learning with Tabular Q-Learning</h3>
        <p>Grid sizes: 5x5, 7x7, 10x10, 15x15</p>
        <p>Number of layers: 3. Number of neurons in the hidden layer: 128.</p>
        <p>Commit ID: a4af5cec85fd9cb0c316390392f0c19520b023ae</p>
        <div style={{flexWrap: 'wrap', width: '80vw', flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part4data5x5}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [500, 1000, 1500, 2000, 2500],
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part4data7x7}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [500, 1000, 1500, 2000, 2500],
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part4data10x10}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [500, 1000, 1500, 2000, 2500],
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
            <div style={{ width: 370, height: 400, color: 'white' }}>
                <ResponsiveLine /* or Line for fixed dimensions */
                    data={part4data15x15}
                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                    axisBottom={{ 
                        legend: 'Episodes', 
                        legendOffset: 36,
                        tickValues: [500, 1000, 1500, 2000, 2500],
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
                            anchor: 'top-right',
                            direction: 'column',
                            translateX: 0,
                            itemWidth: 80,
                            itemHeight: 22,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
        </div>

        <h3>Part 2.2: Varying the number of layers and neurons in the hidden layer</h3>
        <p>Grid size: 10x10. Hidden layers: 1.</p>
        <div style={{ width: 370, height: 400, color: 'white' }}>
            <ResponsiveLine /* or Line for fixed dimensions */
                data={part5data}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                        anchor: 'top-right',
                        direction: 'column',
                        translateX: 0,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
                    }
                ]}
            />
        </div>

        <div style={{ width: 370, height: 400, color: 'white' }}>
            <ResponsiveLine /* or Line for fixed dimensions */
                data={part6data}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
                        anchor: 'top-right',
                        direction: 'column',
                        translateX: 0,
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