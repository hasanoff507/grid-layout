import React, { useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import Paper from '@mui/material/Paper';
import { ArgumentAxis, ValueAxis, BarSeries, Chart } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

const ReactGridLayout = WidthProvider(RGL);
type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {

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

    const getId = () => {
        return Math.random().toString();
        // return idCounter.toString();
    };
    const [layout, setLayout] = useState([{ x: 0, y: 0, w: 3, h: 3, i: getId() }])
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("click")
        const newItems = { x: 0, y: 0, w: 3, h: 3, i: getId() };
        if (layout.some(item => item.x === 0 && item.y)) {
            setLayout(
                layout.map(item => {
                    if (item.x === 0) {
                        return { ...item, y: item.y++ };
                    }

                    return item;
                }).concat([newItems])
            )
        } else {
            setLayout(layout.concat([newItems]));
        }

    }
    const defaultProps = {
        isDraggable: true,
        isResizable: true,
        items: 5,
        rowHeight: 30,
        preventCollision: false,
        cols: 12
    };

    return (
        <>        <div>
            <button onClick={handleClick}>

                Add item</button>
        </div>
            <ReactGridLayout
                {...defaultProps}
                containerPadding={[10, 10]}
                onLayoutChange={layout => setLayout(layout)}
            >
                {layout.map(item => (
                    <div key={item.i} data-grid={item} style={{ overflow: 'hidden' }}>
                        <input type="text" placeholder='Title' style={{ width: '100%', background: 'white', border: 'unset' }} />
                        <div>hello</div>
                        <span className='resize'></span>
                    </div>
                ))}
            </ReactGridLayout>
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
            {/* // </div > */}
        </>
    )
}

export default View;