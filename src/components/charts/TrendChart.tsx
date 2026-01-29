// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   type ChartOptions,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface TrendChartProps {
//   data: {
//     labels: string[];
//     values: number[];
//   };
// }

// export default function TrendChart({ data }: TrendChartProps) {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Tendencia',
//         data: data.values,
//         borderColor: 'rgba(59, 130, 246, 1)',
//         backgroundColor: 'rgba(59, 130, 246, 0.1)',
//         borderWidth: 2,
//         tension: 0.4,
//         pointRadius: 4,
//         pointHoverRadius: 6,
//         pointBackgroundColor: 'rgba(59, 130, 246, 1)',
//         pointBorderColor: '#fff',
//         pointBorderWidth: 2,
//         fill: true,
//       },
//     ],
//   };

//   const options: ChartOptions<'line'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top' as const,
//         labels: {
//           color: 'hsl(var(--foreground))',
//           font: {
//             size: 12,
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: 'hsl(var(--card))',
//         titleColor: 'hsl(var(--foreground))',
//         bodyColor: 'hsl(var(--foreground))',
//         borderColor: 'hsl(var(--border))',
//         borderWidth: 1,
//         padding: 12,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: 'hsl(var(--border))',
//         },
//         ticks: {
//           color: 'hsl(var(--muted-foreground))',
//           font: {
//             size: 12,
//           },
//         },
//       },
//       x: {
//         grid: {
//           color: 'hsl(var(--border))',
//         },
//         ticks: {
//           color: 'hsl(var(--muted-foreground))',
//           font: {
//             size: 12,
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ height: '300px', width: '100%' }}>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// }
