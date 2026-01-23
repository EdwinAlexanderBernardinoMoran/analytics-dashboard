import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface TrendChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

export default function TrendChart({ data }: TrendChartProps) {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  // Get colors from CSS variables
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-1').trim();
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-2').trim();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
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
          cursor={{ stroke: 'hsl(var(--primary))' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="oklch(0.62 0.25 40)"
          strokeWidth={2}
          dot={{ fill: 'oklch(0.62 0.25 40)', r: 4 }}
          activeDot={{ r: 6 }}
          name="Tendencia"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
