import React, { useState, useEffect } from "react";
// import '../../../../App.css'
import { DatasourceApi, ICube, IDataSource } from '../../../../api/datasource'
import { HeaderDataSource, HeaderTitle, DataSource, DataSourceText, DataSourceICubs, DataSourceTextIcubs, DataSourceSelected, DataSourceOption, DataSourceButton } from "./datasource";
import { GrRefresh } from 'react-icons/gr'

type Props = {
    handleClick: (dataSource: string, cubsValue: string) => void;
    setShowHide: boolean
}

const View: React.FC<Props> = ({ handleClick, setShowHide }: Props) => {

    const [superstore, setSuperstore] = useState([] as IDataSource[])
    const [icubs, setIcubs] = useState([] as ICube[])


    const [dataSource, setDataSource] = useState('')
    const [cubsValue, setCubsValue] = useState('')


    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        setSuperstore(DatasourceApi.getDataSources())
    }, [])


    function IdatahandleChange(item: any) {
        let selectValue = item.target.value
        setDataSource(selectValue);
        setIcubs(DatasourceApi.getCubes(selectValue))


    }

    function IcubsChange(icubs: any) {
        let icubsSelectValue = icubs.target.value
        setCubsValue(icubsSelectValue)
    }
    function handleShow() {
        setIsActive(true)
        // console.log(isActive);

    }

    return (
        <>
            <div className={setShowHide ? 'hide' : 'show'}>
                <HeaderDataSource >
                    <HeaderTitle>Add Data Source</HeaderTitle>
                    <DataSource>
                        <DataSourceText>Data Source</DataSourceText>

                        <DataSourceSelected onChange={(item: any) => IdatahandleChange(item)}>
                            {superstore.map((item, index) => (
                                <DataSourceOption key={index} value={item.name}>{item.name}</DataSourceOption>
                            ))}
                        </DataSourceSelected>

                    </DataSource>
                    <br />
                    <DataSourceICubs>
                        <DataSourceTextIcubs>Data Source</DataSourceTextIcubs>

                        <DataSourceSelected onChange={(icubs: any) => IcubsChange(icubs)}>
                            {icubs.map((icubs, index) => (
                                <DataSourceOption key={index} value={icubs.name}>{icubs.name}</DataSourceOption>
                            ))}
                        </DataSourceSelected>
                        <br />
                    </DataSourceICubs>
                    <DataSourceButton onClick={() => handleClick(dataSource, cubsValue)} >ok</DataSourceButton>
                </HeaderDataSource>
            </div>
            <div className={setShowHide ? 'show' : 'hide'} >
                <button className={isActive ? 'hide' : "show"} style={{ background: "#6495ED", width: '40px', height: '30px', borderRadius: '5px', cursor: 'pointer', border: 'none', marginLeft: '10px' }} onClick={handleShow}><GrRefresh /></button>
            </div>

            <div className={isActive ? 'show' : 'hide'}>

                <HeaderDataSource >
                    <HeaderTitle>Add Data Source</HeaderTitle>
                    <DataSource>
                        <DataSourceText>Data Source</DataSourceText>

                        <DataSourceSelected onChange={(item: any) => IdatahandleChange(item)}>
                            {superstore.map((item, index) => (
                                <DataSourceOption key={index} value={item.name}>{item.name}</DataSourceOption>
                            ))}
                        </DataSourceSelected>

                    </DataSource>
                    <br />
                    <DataSourceICubs>
                        <DataSourceTextIcubs>Data Source</DataSourceTextIcubs>

                        <DataSourceSelected onChange={(icubs: any) => IcubsChange(icubs)}>
                            {icubs.map((icubs, index) => (
                                <DataSourceOption key={index} value={icubs.name}>{icubs.name}</DataSourceOption>
                            ))}
                        </DataSourceSelected>
                        <br />
                    </DataSourceICubs>
                    <DataSourceButton onClick={() => handleClick(dataSource, cubsValue)} >ok</DataSourceButton>
                </HeaderDataSource>
            </div>



        </>

    )
}

export default View;