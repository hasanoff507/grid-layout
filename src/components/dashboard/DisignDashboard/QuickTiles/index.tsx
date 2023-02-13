
import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
type Props = {

}


const View: React.FC<Props> = ({ }: Props) => {
    const getId = () => {
        return Math.random().toString();
    };

    const [everything, setEverything] = useState(false);
    const [layout, setLayout] = useState([{ x: 0, y: 0, w: 3, h: 3, i: getId() }])
    const [chart, setChart] = useState([
        [{ name: 'Yanvar', uv: 4000, pv: 2400, amt: 2400, i: getId() },
        { name: 'Fevral', uv: 3000, pv: 1398, amt: 2210, i: getId() },
        { name: 'Mart', uv: 2000, pv: 9800, amt: 2290, i: getId() },
        { name: 'Aprel', uv: 2780, pv: 3908, amt: 2000, i: getId() },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181, i: getId() },
        { name: 'Iyun', uv: 2390, pv: 3800, amt: 2500, i: getId() },
        { name: 'Iyul', uv: 3490, pv: 4300, amt: 2100, i: getId() }]
    ])

    function TableTitle(
        name: string,
        sales: number,
        adress: string
    ) {
        return { name, sales, adress };
    }

    const tableValue = [
        TableTitle('John', 60, "Vashigton 2/1"),
        TableTitle('Jorsh', 45, "Florida"),
        TableTitle('Mark', 80, "Nyu-York")

    ];

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
    const chartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("click")
        const newChart = [
            { name: 'Yanvar', uv: 4000, pv: 2400, amt: 2400, i: getId() },
            { name: 'Fevral', uv: 3000, pv: 1398, amt: 2210, i: getId() },
            { name: 'Mart', uv: 2000, pv: 9800, amt: 2290, i: getId() },
            { name: 'Aprel', uv: 2780, pv: 3908, amt: 2000, i: getId() },
            { name: 'May', uv: 1890, pv: 4800, amt: 2181, i: getId() },
            { name: 'Iyun', uv: 2390, pv: 3800, amt: 2500, i: getId() },
            { name: 'Iyul', uv: 3490, pv: 4300, amt: 2100, i: getId() },
        ];

        setChart(prev => [...prev, newChart])
        setEverything(true)
    }

    const tableClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('hello');


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
        <>
            <div>
                <button onClick={handleClick}>
                    Add item
                </button>
                <button onClick={chartClick}>Add Chart</button>
                <button onClick={tableClick}>Add Item</button>
            </div>
            <ResponsiveReactGridLayout
                {...defaultProps}
                className="test-layout"
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={40}>
                {layout.map(item => (
                    <div key={item.i} data-grid={item} style={{ overflow: 'hidden' }}>
                        <input type="text" placeholder='Title' style={{ width: '100%', background: 'white', border: 'unset' }} />
                        <div>hello</div>
                    </div>
                ))}
                <div className={everything ? 'hide' : 'show'}>
                    {chart.map((item, index) => (
                        <div key={index}>
                            <ResponsiveContainer>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={item}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Bar dataKey="pv" fill="#8884d8" />
                                    <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    ))}
                </div>
                <div key="a" style={{ overflow: 'hidden' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align='right'>Sales</TableCell>
                                    <TableCell align='right'>Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableValue.map((row, index) => (
                                    <TableRow key={index} >
                                        <TableCell component="th" scope='row'>{row.name}</TableCell>
                                        <TableCell align='right'>{row.sales}</TableCell>
                                        <TableCell align='right'>{row.adress}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </ResponsiveReactGridLayout>

        </>
    )
}

export default View;





