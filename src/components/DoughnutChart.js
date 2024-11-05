import React from 'react';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

class DoughnutChart extends React.Component {
  render() {
    const { values } = this.props;

    const data = {
      datasets: [
        {
          data: values,
          backgroundColor: ['#EF7B00', '#006DB9'],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Douughnut chart',
      },
    };

    return (
      <div style={{}}>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default DoughnutChart;
