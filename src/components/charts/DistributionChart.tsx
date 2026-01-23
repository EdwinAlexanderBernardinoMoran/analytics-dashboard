import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DistributionChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const COLORS = [
  'oklch(0.62 0.25 40)',
  'oklch(0.50 0.22 280)',
  'oklch(0.45 0.20 200)',
  'oklch(0.60 0.23 180)',
];

export default function DistributionChart({ data }: DistributionChartProps) {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(entry) => `${entry.name}: ${entry.value}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--foreground))',
          }}
          formatter={(value) => `${value}%`}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
