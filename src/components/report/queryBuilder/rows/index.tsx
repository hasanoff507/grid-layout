
import React, { useState } from 'react';
import { ColumnTitle, ColumnBox, Contentbox, ContentDropText, MenuButton, ContentDropFalse, ContentDropH4 } from '../column/app';
import { Menu, MenuItem, } from "@szhsin/react-menu";
import { FiSettings } from 'react-icons/fi'

// import "@szhsin/react-menu/dist/index.css";

type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {

    const [drag, setDrag] = useState("drop Here")
    const [dragTrue, setDragTrue] = useState(false)


    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('measure');
        console.log(data, 'data')

        if (data) {
            setDrag(data);
            setDragTrue(true)
        }


    };
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    return (<>
        <ColumnTitle>Rows</ColumnTitle>
        <ColumnBox >
            <Contentbox onDragOver={allowDrop} onDrop={dropHandler}>
                {/* {dragTrue ? <ContentDropText>{drag}</ContentDropText> : <ContentDropFalse>Drop Here</ContentDropFalse>} */}

                {dragTrue ? <ContentDropText>
                    <ContentDropH4>
                        {drag}

                    </ContentDropH4>
                    <div
                        style={{
                            justifySelf: "flex-start"
                        }}
                    >

                        <Menu

                            menuButton={<MenuButton><FiSettings style={{ width: '22px', height: '22px', color: "darkblue" }} /></MenuButton>}
                            onItemClick={(e: React.ButtonHTMLAttributes<HTMLButtonElement>) => console.log(`[Menu] ${e.value} clicked`)}

                        >
                            <MenuItem
                                value="Item1"
                                onClick={(e: React.ButtonHTMLAttributes<HTMLButtonElement>) => console.log(`[MenuItem] ${e.value} clicked`)}
                            >
                                Item1
                            </MenuItem>

                            <MenuItem
                                value="Item2"
                                onClick={(e: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
                                    console.log(`[MenuItem] ${e.value} clicked`);
                                }}
                            >
                                Item2
                            </MenuItem>

                            <MenuItem value="Item3">Item3</MenuItem>
                        </Menu>
                    </div>
                </ContentDropText> : <ContentDropFalse >Drop Here</ContentDropFalse>}

            </Contentbox>
        </ColumnBox>
    </>
    )
}

export default View;