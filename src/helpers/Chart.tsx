// components/Chart.tsx

import { useEffect, useRef } from 'react';
import Chartjs from 'chart.js/auto';

interface ChartData {
    title: string;
    labels: string[];
    values: number[];
    colors?: string[];
}

interface ChartProps {
    data: ChartData;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    const chartContainer = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            if (ctx) {
                new Chartjs(ctx, {
                    type: 'line',
                    data: {
                        labels: data.labels,
                        datasets: [
                            {
                                label: data.title,
                                data: data.values,
                                backgroundColor: data.colors || 'rgba(75, 192, 192, 0.2)',
                                borderColor: data.colors || 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                });
            }
        }
    }, [chartContainer, data]);

    return (
        <div className="w-full">
            <canvas ref={chartContainer} />
        </div>
    );
};

export default Chart;
