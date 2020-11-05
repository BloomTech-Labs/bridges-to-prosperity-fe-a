import React from 'react';
import Plot from 'react-plotly.js';

const RenderGraph = () => {
  const windowWidth = window.innerWidth * 0.25;
  const windowHeight = window.innerHeight * 0.4;

  const trace1 = {
    x: [5500, 200, 3302],
    y: ['Population', 'Served', 'Growth'],
    orientation: 'h',
    type: 'bar',
  };
  const trace2 = {
    x: [500, 3300, 302],
    y: ['Population', 'Served', 'Growth'],
    orientation: 'h',
    type: 'bar',
    name: 'Economic Effect (USD)',
  };
  const trace3 = {
    x: [5200, 3320, 3602],
    y: ['Population', 'Served', 'Growth'],
    orientation: 'h',
    type: 'bar',
    name: 'Economic Effect (RWF)',
  };

  const data = [trace1];
  const layout = {
    width: windowWidth,
    height: windowHeight,
    autosize: false,
    font: { size: 11 },
    showlegend: false,
    // legend: {
    //   x: 0.1,
    //   xanchor: 'center',
    //   y: 0.1,
    // },
    plot_bgcolor: '#161345',
    color: 'white',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    yaxis: {
      automargin: true,
    },
    xaxis: {
      automargin: true,
    },
  };

  return (
    <Plot
      className="graph"
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
        fillFrame: true,
      }}
    />
  );
};

export default RenderGraph;
