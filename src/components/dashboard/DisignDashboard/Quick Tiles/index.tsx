import React, { useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);
type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {

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
        <>
            {/* // <div style={{ background: 'grey' }}> */}
            {/* <GridLayout
                className='layout'
                cols={12}
                rowHeight={12}
                width={1200}>
                <div
                    style={{ background: "red", overflow: 'hidden' }}
                    key="a"
                    data-grid={{ x: 12, y: 0, w: 2, h: 2, }}>
                    test
                </div>
                <div
                    key="b"
                    data-grid={{ x: 12, y: 0, w: 2, h: 2, }}
                    style={{
                        color: "black",
                        height: "auto",
                        width: "auto",
                        background: "purple",
                        overflow: "hidden"

                    }}
                >
                    hello
                </div>

            </GridLayout> */}
            <div>
                <button onClick={handleClick}>

                    Add item</button>
            </div>
            <ReactGridLayout
                {...defaultProps}
                containerPadding={[10, 10]}
                onLayoutChange={layout => setLayout(layout)}
            >
                {layout.map(item => (
                    <div key={item.i} data-grid={item}>
                        <input type="text" placeholder='Title' />
                        <span>s;dlf</span>
                    </div>
                ))}
            </ReactGridLayout>
        
            {/* // </div > */}
        </>
    )
}

export default View;