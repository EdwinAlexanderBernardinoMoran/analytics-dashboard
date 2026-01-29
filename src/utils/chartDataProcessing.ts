/**
 * Groups chart data by month, summing values for each month
 */
export function groupByMonth(labels: string[], data: number[]): { labels: string[]; data: number[] } {
    const monthlyData: Map<string, number> = new Map();

    labels.forEach((label, index) => {
        // Parse date and extract year-month
        const date = new Date(label);
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        // Sum values for the same month
        const currentValue = monthlyData.get(yearMonth) || 0;
        monthlyData.set(yearMonth, currentValue + (data[index] || 0));
    });

    // Sort by date and format labels
    const sortedEntries = Array.from(monthlyData.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    return {
        labels: sortedEntries.map(([yearMonth]) => {
            const [year, month] = yearMonth.split('-');
            return `${month}/${year}`;
        }),
        data: sortedEntries.map(([, value]) => value),
    };
}

/**
 * Groups multiple datasets by month
 */
export function groupDatasetsByMonth(
    labels: string[],
    datasets: Array<{ label: string; data: number[] }>
): { labels: string[]; datasets: Array<{ label: string; data: number[] }> } {
    // Get unique months from labels
    const monthlyLabels = new Set<string>();
    const monthIndexMap = new Map<string, number>();

    labels.forEach((label) => {
        const date = new Date(label);
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        monthlyLabels.add(yearMonth);
    });

    // Sort months
    const sortedMonths = Array.from(monthlyLabels).sort((a, b) => a.localeCompare(b));
    sortedMonths.forEach((month, index) => {
        monthIndexMap.set(month, index);
    });

    // Group each dataset
    const groupedDatasets = datasets.map((dataset) => {
        const monthlyData = new Array(sortedMonths.length).fill(0);

        labels.forEach((label, index) => {
            const date = new Date(label);
            const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            const monthIndex = monthIndexMap.get(yearMonth);

            if (monthIndex !== undefined) {
                monthlyData[monthIndex] += dataset.data[index] || 0;
            }
        });

        return {
            label: dataset.label,
            data: monthlyData,
        };
    });

    // Format labels
    const formattedLabels = sortedMonths.map((yearMonth) => {
        const [year, month] = yearMonth.split('-');
        return `${month}/${year}`;
    });

    return {
        labels: formattedLabels,
        datasets: groupedDatasets,
    };
}

/**
 * Determines if data should be grouped based on number of data points
 */
export function shouldGroupData(dataPointsCount: number, threshold: number = 50): boolean {
    return dataPointsCount > threshold;
}
