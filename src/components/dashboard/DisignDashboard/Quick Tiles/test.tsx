import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ArgumentAxis, ValueAxis, BarSeries, Chart } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';





interface IDataItem {
    month: string,
    sale: number,
    total: number,
}

const chartData: IDataItem[] = [
    { month: 'Jan', sale: 50, total: 987 },
    { month: 'Feb', sale: 100, total: 3000 },
    { month: 'March', sale: 30, total: 1100 },
    { month: 'April', sale: 107, total: 7100 },
    { month: 'May', sale: 95, total: 4300 },
    { month: 'June', sale: 150, total: 6210 },
    { month: 'July', sale: 212, total: 6500 },
    { month: 'August', sale: 80, total: 4500 },
    { month: 'September', sale: 120, total: 2000 },
    { month: 'October', sale: 138, total: 3690 },
    { month: 'November', sale: 60, total: 6840 },
    { month: 'Decenber', sale: 160, total: 7500 },
];

export default function App() {
    return (
        <Paper>
            <Chart
                data={chartData}
            >
                <ValueScale name="sale" />
                <ValueScale name="total" />

                <ArgumentAxis />
                <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
                <BarSeries
                    name="Units Sold"
                    valueField="sale"
                    argumentField="month"
                    scaleName="sale"
                />

            </Chart>
        </Paper>
    );
}
