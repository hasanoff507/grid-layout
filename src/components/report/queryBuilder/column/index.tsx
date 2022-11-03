
import React, { useState } from 'react';
import { ColumnTitle, ColumnBox, Contentbox, ContentDropText, ContentDropFalse, ContentButton, MenuButton, ContentDropH4 } from './app';
import { FiSettings } from 'react-icons/fi'
import { Menu, MenuItem } from "@szhsin/react-menu";



type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {

    const [drag, setDrag] = useState("Drop Here")
    const [list, setList] = useState(false)


    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const data = event.dataTransfer.getData('Attribute');


        if (data) {
            setDrag(data);
            setList(true)
        }




    };
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        // console.log(event.preventDefault());


    };
    // function contentButtonClick(e:React.BaseHTMLAttributes<HTMLButtonElement>){
    //     console.log(e);

    // }

    return (<>
        <ColumnTitle>Columns</ColumnTitle>
        <ColumnBox >
            <Contentbox onDragOver={allowDrop} onDrop={dropHandler}>
                {/* {list ? <ContentDropText>{drag}  */}
                {/* <ContentButton onClick={(e: React.ButtonHTMLAttributes<HTMLButtonElement>) => contentButtonClick(e)}><FiSettings style={{ width: '22px', height: '22px', color: "darkblue" }} /> */}
                {/* </ContentButton></ContentDropText> : <ContentDropFalse >Drop Here</ContentDropFalse>} */}
                {list ? <ContentDropText>
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