import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType, Chart } from 'chart.js';
import { Plugin } from 'chart.js';
// import { Chart } from 'chart.js';

// Register the plugin globally in your AppModule or in the component
// Chart.register(myCustomPlugin);
// Define the custom plugin
const myCustomPlugin: Plugin<'doughnut'> = {
  id: 'myCustomPlugin',
  beforeDraw: (chart) => {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;
    const centerX = width / 2;
    const centerY = height / 2;
    
    ctx.save();
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.fillText('75%', centerX, centerY);
    ctx.restore();
  }
};

// Register the plugin with Chart.js
Chart.register(myCustomPlugin);



@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent {
  public ringChartLabels: string[] = ['Blue', 'grey'];
  public ringChartData: ChartData<'doughnut'> = {
    labels: this.ringChartLabels,
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#000080', '#5e5e5e'],
        hoverBackgroundColor: ['#000080', '#5e5e5e']
      }
    ]
  };

  public ringChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        }
      }
    },
    layout: {
      padding: -45  // Adjust padding to fit the text
    }
  };

  public ringChartType: 'doughnut' = 'doughnut';
}
