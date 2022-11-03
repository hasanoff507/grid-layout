
import React, { useState } from 'react';
import '../../../App'

import Datasource from './datasource';
import Attributes from './attributes';
import Measures from './Measures'

type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {


    const [dataSourceValu, setDataSourceValu] = useState("")
    const [cubsData, setCubsDate] = useState("")
    const [showHide, setSowHide] = useState(false)



    const handleclick = (dataSource: string, cubsValue: string): void => {
        let dataSourceValue = dataSource;
        let cubsDataValue = cubsValue;

        setDataSourceValu(dataSourceValue)
        setCubsDate(cubsDataValue)

        setSowHide(true)



        //     if (dataSourceValu && cubsDataValue) {
        //         setTest(false)
        //     }else if()


    }





    return (
        <div>


            <Datasource handleClick={handleclick} setShowHide={showHide}  />
            {/* <Datasource /> */}
            <Attributes dataSource={dataSourceValu} cubsValue={cubsData} />
            <Measures dataSource={dataSourceValu} cubsValue={cubsData} />
        </div>
    )
}

export default View;