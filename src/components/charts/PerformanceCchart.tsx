import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface PerformanceChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

export default function PerformanceChart({ data }: PerformanceChartProps) {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={chartData}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          style={{ fontSize: '12px' }}
        />
        <PolarRadiusAxis
          stroke="hsl(var(--muted-foreground))"
          style={{ fontSize: '12px' }}
        />
        <Radar
          name="KPIs"
          dataKey="value"
          stroke="oklch(0.62 0.25 40)"
          fill="oklch(0.62 0.25 40)"
          fillOpacity={0.6}
          dot={{ fill: 'oklch(0.62 0.25 40)', r: 4 }}
          activeDot={{ r: 6 }}
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
      </RadarChart>
    </ResponsiveContainer>
  );
}
