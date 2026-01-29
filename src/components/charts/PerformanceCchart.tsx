// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     type ChartOptions,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// interface PerformanceChartProps {
//     data: {
//         labels: string[];
//         values: number[];
//     };
// }

// export default function PerformanceChart({ data }: PerformanceChartProps) {
//     const chartData = {
//         labels: data.labels,
//         datasets: [
//             {
//                 label: 'Desempeño',
//                 data: data.values,
//                 backgroundColor: 'rgba(168, 85, 247, 0.8)',
//                 borderColor: 'rgba(168, 85, 247, 1)',
//                 borderWidth: 1,
//                 borderRadius: 8,
//             },
//         ],
//     };

//     const options: ChartOptions<'bar'> = {
//         responsive: true,
//         maintainAspectRatio: false,
//         indexAxis: 'y' as const,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top' as const,
//                 labels: {
//                     color: 'hsl(var(--foreground))',
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//             tooltip: {
//                 backgroundColor: 'hsl(var(--card))',
//                 titleColor: 'hsl(var(--foreground))',
//                 bodyColor: 'hsl(var(--foreground))',
//                 borderColor: 'hsl(var(--border))',
//                 borderWidth: 1,
//                 padding: 12,
//             },
//         },
//         scales: {
//             x: {
//                 beginAtZero: true,
//                 max: 100,
//                 grid: {
//                     color: 'hsl(var(--border))',
//                 },
//                 ticks: {
//                     color: 'hsl(var(--muted-foreground))',
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     color: 'hsl(var(--muted-foreground))',
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div style={{ height: '300px', width: '100%' }}>
//             <Bar data={chartData} options={options} />
//         </div>
//     );
// }
