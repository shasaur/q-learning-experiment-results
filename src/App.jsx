import { ResponsiveLine } from "@nivo/line";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import IconGrid from "./IconGrid";

import "./App.css";
import "./graphs.css";

// Images
import experimentGetFoodGif from "./assets/experiment_get-food.gif";
import experimentGetKeyThenDoorGif from "./assets/experiment_get-key-and-then-door.gif";
import experimentChaseFoodGif from "./assets/experiment_chase-food.gif";

// Data
import part1data from "./experiment1-part1-data.json";

import part2data from "./experiment1-part2-data.json";

import part3data5x5 from "./experiment1-part3-5x5-data.json";
import part3data7x7 from "./experiment1-part3-7x7-data.json";
import part3data10x10 from "./experiment1-part3-10x10-data.json";
import part3data15x15 from "./experiment1-part3-15x15-data.json";

import part4data5x5 from "./experiment1-part4-5x5-data.json";
import part4data7x7 from "./experiment1-part4-7x7-data.json";
import part4data10x10 from "./experiment1-part4-10x10-data.json";
import part4data15x15 from "./experiment1-part4-15x15-data.json";

import part5data from "./experiment1-part5-data.json";
import part6data from "./experiment1-part6-data.json";

const snippet1 = `target = reward + gamma * np.max(q_table[next_state])
q_table[state, action] = q_table[state, action] + alpha * (target - q_table[state, action])`;

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1>Q-Learning Experiments</h1>
      <IconGrid />
      <h2>1. Basic Q-Learning</h2>
      <p>
        A simple experiment for an agent to learn to navigate to food in a map.
      </p>
      <SyntaxHighlighter
        language="python"
        style={oneDark}
        customStyle={{ fontSize: "14px", margin: "10px 0", maxWidth: "100%" }}>
        {snippet1}
      </SyntaxHighlighter>
      <ul>
        <li>
          For every possible state, and for every possible action in that state,
          we store a value in the q-table.
        </li>
        <li>
          Our reward is not only what we receive at which step, but also the new
          rewards taking that step will unlock (i.e. what the new actions in
          that state will give as a reward)
        </li>
      </ul>
      <img src={experimentGetFoodGif} alt="Experiment 1" />
      <h3>1.1. Variation in learning with the same hyperparameters</h3>
      <div style={{ width: 370, height: 400, color: "white" }}>
        <ResponsiveLine /* or Line for fixed dimensions */
          data={part1data}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          yScale={{ type: "linear", min: "auto", max: "auto", reverse: false }}
          axisBottom={{
            legend: "Episodes",
            legendOffset: 36,
            tickValues: [3000, 6000, 9000, 12000, 15000, 18000],
            format: (value) => `${Math.floor(value / 1000)}k`,
          }}
          axisLeft={{ legend: "Average Steps per Episode", legendOffset: -40 }}
          pointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "seriesColor" }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          gridXValues={[3000, 6000, 9000, 12000, 15000, 18000]}
          legends={[
            {
              // Inside the graph in its top right corner
              anchor: "top-right",
              direction: "column",
              translateX: 0,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
      <h3>1.2. Averaging 10 runs for more consistent comparisons</h3>
      <div style={{ width: 370, height: 400, color: "white" }}>
        <ResponsiveLine /* or Line for fixed dimensions */
          data={part2data}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          yScale={{ type: "linear", min: "auto", max: "auto", reverse: false }}
          axisBottom={{
            legend: "Episodes",
            legendOffset: 36,
            tickValues: [3000, 6000, 9000, 12000, 15000, 18000],
            format: (value) => `${Math.floor(value / 1000)}k`,
          }}
          axisLeft={{ legend: "Average Steps per Episode", legendOffset: -40 }}
          pointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "seriesColor" }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          gridXValues={[3000, 6000, 9000, 12000, 15000, 18000]}
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              translateX: 0,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
      <h3>1.3. Scaling the difficulty of the task</h3>
      <p>
        Trying different grid sizes to see how it affects learning. 5x5, 7x7,
        10x10, 15x15
      </p>
      <div
        style={{
          flexWrap: "wrap",
          width: "80vw",
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
        }}>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part3data5x5}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [3000, 6000, 9000, 12000, 15000, 18000],
              format: (value) => `${Math.floor(value / 1000)}k`,
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            gridXValues={[3000, 6000, 9000, 12000, 15000, 18000]}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part3data7x7}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [3000, 6000, 9000, 12000, 15000, 18000],
              format: (value) => `${Math.floor(value / 1000)}k`,
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            gridXValues={[3000, 6000, 9000, 12000, 15000, 18000]}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part3data10x10}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [3000, 6000, 9000, 12000, 15000, 18000],
              format: (value) => `${Math.floor(value / 1000)}k`,
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            gridXValues={[3000, 6000, 9000, 12000, 15000, 18000]}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part3data15x15}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [6000, 12000, 18000, 24000, 30000, 36000],
              format: (value) => `${Math.floor(value / 1000)}k`,
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            gridXValues={[
              3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000,
              33000, 36000, 39000,
            ]}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
      </div>
      <h3>Conclusions</h3>
      <p>
        Tabular Q-learning is bad at generalizing to unknown situations and
        hence scaling learning to larger grid sizes takes exponentially longer.
        This is my impression, however, it could be tested as a standalone
        experiment where some positions are deliberately not included in the
        training set.
      </p>
      <h2>2. Deep Q-Learning</h2>
      <p>
        Trying out deep q-learning and comparing the performance of against
        standard tabular q-learning.
      </p>
      <ul>
        <li>The table is replaced with a function / network</li>
        <li>
          <b>Target network:</b> needed to stabilise learning because a
          Q-network tries to predict both the current and future rewards, which
          can cause rapid shifting in rewards. A target network is essentially a
          copy of the Q-network that is updated less frequently. Without target
          networks, DQN often fails to learn effective policies, as the Q-value
          estimates diverge due to rapidly shifting targets.
        </li>
        <li>
          <b>Experience replay buffer:</b> tracks all the actions taken and the
          rewards received
        </li>
      </ul>
      <p>Useful resources:</p>
      <ul>
        <li>
          <a href="https://milvus.io/ai-quick-reference/what-are-target-networks-in-dqn">
            Target networks
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=x83WmvbRa2I">
            Deep Q-Learning
          </a>
        </li>
      </ul>
      <h3>2.1. Comparing Deep Q-Learning with Tabular Q-Learning</h3>
      <p>Grid sizes: 5x5, 7x7, 10x10, 15x15</p>
      <p>Number of layers: 3. Number of neurons in the hidden layer: 128.</p>
      {/* <p>Commit ID: a4af5cec85fd9cb0c316390392f0c19520b023ae</p> */}
      <div
        style={{
          flexWrap: "wrap",
          width: "80vw",
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
        }}>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part4data5x5}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [500, 1000, 1500, 2000, 2500],
              format: (value) => `${Math.floor(value / 1000)}k`,
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part4data7x7}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [500, 1000, 1500, 2000, 2500],
              format: (value) => `${Math.floor(value / 1000)}k`,
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part4data10x10}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [500, 1000, 1500, 2000, 2500],
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
        <div style={{ width: 370, height: 400, color: "white" }}>
          <ResponsiveLine /* or Line for fixed dimensions */
            data={part4data15x15}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            axisBottom={{
              legend: "Episodes",
              legendOffset: 36,
              tickValues: [500, 1000, 1500, 2000, 2500],
            }}
            axisLeft={{
              legend: "Average Steps per Episode",
              legendOffset: -40,
            }}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "seriesColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                translateX: 0,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
      </div>

      <h3>
        Part 2.2: Varying the number of layers and neurons in the hidden layer
      </h3>
      <p>Grid size: 10x10. Hidden layers: 1.</p>
      <div style={{ width: 370, height: 400, color: "white" }}>
        <ResponsiveLine /* or Line for fixed dimensions */
          data={part5data}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          yScale={{ type: "linear", min: "auto", max: "auto", reverse: false }}
          axisBottom={{
            legend: "Episodes",
            legendOffset: 36,
            tickValues: [500, 1000, 1500, 2000, 2500],
          }}
          axisLeft={{ legend: "Average Steps per Episode", legendOffset: -40 }}
          pointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "seriesColor" }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              translateX: 0,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
      <p>Then at 64 neurons with various layers:</p>
      <div style={{ width: 370, height: 400, color: "white" }}>
        <ResponsiveLine /* or Line for fixed dimensions */
          data={part6data}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          yScale={{ type: "linear", min: "auto", max: "auto", reverse: false }}
          axisBottom={{
            legend: "Episodes",
            legendOffset: 36,
            tickValues: [500, 1000, 1500, 2000, 2500],
          }}
          axisLeft={{ legend: "Average Steps per Episode", legendOffset: -40 }}
          pointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "seriesColor" }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              translateX: 0,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
      <h3>2.3. Conclusions</h3>
      <p>
        It seems that applying neural networks makes it exponentially easier to
        generalise as can be seen by the performance rapidly improving with
        little episodes, and neural networks tackling larger grid sizes with
        ease. Though it does take significantly longer to train the network.
        Huge performance gains can be seen even at networks with 1 hidden layer
        (or 3 layers in total).
      </p>
      <p>
        Both higher number of neurons and more layers improve performance.
        However, after a certain point, these networks become unreliable, which
        in my guess, would be due to overfitting.
      </p>
      <h2>3. Variations in goals</h2>
      <h3>3.1. Treasure on legs</h3>
      <p>
        Variation on the original task where the treasure moves every 2 turns.
        This is to test whether the agent can react to changes in the
        environment.
      </p>
      <img src={experimentChaseFoodGif} alt="Experiment 3.1" />
      <h3>3.2. First, finding the key</h3>
      <p>
        Variation on the original task where the agent must first pick up the
        key, and then get to the door.
      </p>
      <img src={experimentGetKeyThenDoorGif} alt="Experiment 3.2" />
    </div>
  );
};

export default App;
