// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   type ChartOptions,
// } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface DistributionChartProps {
//   data: {
//     labels: string[];
//     values: number[];
//   };
// }

// const COLORS = [
//   'rgba(59, 130, 246, 0.8)',
//   'rgba(16, 185, 129, 0.8)',
//   'rgba(251, 146, 60, 0.8)',
//   'rgba(244, 63, 94, 0.8)',
//   'rgba(168, 85, 247, 0.8)',
//   'rgba(234, 179, 8, 0.8)',
// ];

// const BORDER_COLORS = [
//   'rgba(59, 130, 246, 1)',
//   'rgba(16, 185, 129, 1)',
//   'rgba(251, 146, 60, 1)',
//   'rgba(244, 63, 94, 1)',
//   'rgba(168, 85, 247, 1)',
//   'rgba(234, 179, 8, 1)',
// ];

// export default function DistributionChart({ data }: DistributionChartProps) {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Distribución',
//         data: data.values,
//         backgroundColor: COLORS,
//         borderColor: BORDER_COLORS,
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options: ChartOptions<'pie'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'right' as const,
//         labels: {
//           color: 'hsl(var(--foreground))',
//           font: {
//             size: 12,
//           },
//           padding: 15,
//         },
//       },
//       tooltip: {
//         backgroundColor: 'hsl(var(--card))',
//         titleColor: 'hsl(var(--foreground))',
//         bodyColor: 'hsl(var(--foreground))',
//         borderColor: 'hsl(var(--border))',
//         borderWidth: 1,
//         padding: 12,
//         callbacks: {
//           label: function (context) {
//             const label = context.label || '';
//             const value = context.parsed || 0;
//             return `${label}: ${value}%`;
//           }
//         }
//       },
//     },
//   };

//   return (
//     <div style={{ height: '300px', width: '100%' }}>
//       <Pie data={chartData} options={options} />
//     </div>
//   );
// }
