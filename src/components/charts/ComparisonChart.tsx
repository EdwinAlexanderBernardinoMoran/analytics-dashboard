import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ComparisonChartProps {
  data: {
    labels: string[];
    series: Array<{
      name: string;
      values: number[];
    }>;
  };
}

const COLORS = ['oklch(0.62 0.25 40)', 'oklch(0.50 0.22 280)'];

export default function ComparisonChart({ data }: ComparisonChartProps) {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    ...Object.fromEntries(
      data.series.map(series => [series.name, series.values[index]])
    ),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          style={{ fontSize: '12px' }}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          style={{ fontSize: '12px' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--foreground))',
          }}
        />
        <Legend />
        {data.series.map((series, index) => (
          <Bar
            key={series.name}
            dataKey={series.name}
            fill={COLORS[index % COLORS.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
