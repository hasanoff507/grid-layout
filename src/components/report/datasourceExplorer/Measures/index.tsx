
import React, { useEffect, useState } from 'react';
import { DatasourceApi, IMeasure, } from '../../../../api/datasource'
import { HeaderMeasure, MeasuresTitle, MeasuresValueComponent, MeasuresValue, } from './style'
type Props = {
    dataSource: string
    cubsValue: string
}

const View: React.FC<Props> = ({ dataSource, cubsValue }: Props) => {

    const [measure, setMeasure] = useState([] as IMeasure[])


    useEffect(() => {
        if (dataSource === '' && cubsValue === '') return
        setMeasure(DatasourceApi.getView(cubsValue).Measures)
    }, [dataSource, cubsValue])


    const dragStart = (
        event: React.DragEvent<HTMLDivElement>,
        Mesures: string
    ) => {
        event.dataTransfer.setData('measure', Mesures);
        console.log(event.dataTransfer);

    };

    function handleInputChange(e: any) {
        // console.log(DatasourceApi.getView(cubsValue).Measures[0].name.trim().toLocaleLowerCase().includes(e.target.value))
        setMeasure(
            DatasourceApi.getView(cubsValue).Measures.filter((cube: any) => cube.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
        )
        // console.log(DatasourceApi.getView(cubsValue).Measures.filter((cube: any) => cube.name.includes(e.target.value)))

    }
    return (<>
        <HeaderMeasure>
            <MeasuresTitle> Measures</MeasuresTitle>
            <input onChange={handleInputChange} placeholder='Search' />
            <MeasuresValueComponent>
                {measure?.map((item, index) => (

                    <MeasuresValue key={index}>
                        <div
                            onDragStart={(event: React.DragEvent<HTMLDivElement>) => dragStart(event, item.name)}
                            draggable={true}>
                            {item.name}
                        </div>
                    </MeasuresValue>
                ))}

            </MeasuresValueComponent>
        </HeaderMeasure>

    </>
    )
}

export default View;