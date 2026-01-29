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

// interface ComparisonChartProps {
//     data: {
//         labels: string[];
//         series: {
//             name: string;
//             values: number[];
//         }[];
//     };
// }

// const COLORS = [
//     'rgba(59, 130, 246, 0.8)',
//     'rgba(16, 185, 129, 0.8)',
// ];

// const BORDER_COLORS = [
//     'rgba(59, 130, 246, 1)',
//     'rgba(16, 185, 129, 1)',
// ];

// export default function ComparisonChart({ data }: ComparisonChartProps) {
//     const chartData = {
//         labels: data.labels,
//         datasets: data.series.map((serie, index) => ({
//             label: serie.name,
//             data: serie.values,
//             backgroundColor: COLORS[index % COLORS.length],
//             borderColor: BORDER_COLORS[index % BORDER_COLORS.length],
//             borderWidth: 1,
//             borderRadius: 8,
//         })),
//     };

//     const options: ChartOptions<'bar'> = {
//         responsive: true,
//         maintainAspectRatio: false,
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
//             y: {
//                 beginAtZero: true,
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
//             x: {
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
