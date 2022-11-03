import React, { useEffect, useState } from "react";
import { DatasourceApi, IAttribute } from "../../../../api/datasource";
// import { DatasourceApi, IAttribute } from "../.././datasourceExplorer/datasource/";

import { HeaderTitle } from "../datasource/datasource";
import { Header, Container, AttributeValue, Testtext } from './style'

type Props = {
    dataSource: string;
    cubsValue: string;
}


const View: React.FC<Props> = ({ dataSource, cubsValue }: Props) => {

    const [attribute, setAttribute] = useState([] as IAttribute[])


    // useEffect(() => {
    // if (dataSource === '' && cubsValue === '') return
    // const selectattribute = DatasourceApi.getView(cubsValue)
    // setAttribute(selectattribute.Attributes)
    // }, [dataSource, cubsValue])


    useEffect(() => {
        if (dataSource === '' && cubsValue === '') return
        setAttribute(DatasourceApi.getView(cubsValue).Attributes)
    }, [dataSource, cubsValue])



    const dragStartt = (
        event: React.DragEvent<HTMLDivElement>,
        data: string
    ) => {

        event.dataTransfer.setData('Attribute', data);
    };
    function handleInputChange(e: any) {
        setAttribute(
            DatasourceApi.getView(cubsValue).Attributes.filter((cube: any) => cube.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
        )
    }

    return (
        <Header>
            <HeaderTitle>Dimensions</HeaderTitle>
            <input onChange={handleInputChange} placeholder='Search' />

            <Container>
                {
                    attribute.map((items, index) => {
                        return <AttributeValue key={index}>
                            <div
                                onDragStart={(eventt: React.DragEvent<HTMLDivElement>) => dragStartt(eventt, items.name)}
                                draggable={true}
                            >
                                <Testtext>{items.name}</Testtext>
                            </div>

                        </AttributeValue>
                    })
                }
            </Container>
        </Header>
    )
}

export default View;