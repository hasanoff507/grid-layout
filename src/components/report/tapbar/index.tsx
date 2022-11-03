
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

import Landing from './components/index'
import Home from '../tapbar/components/pages/Home'
import VizSettings from '../tapbar/components/pages/VizSettings'
import TrellisCharts from '../tapbar/components/pages/TrellisCharts'
import CommonCharts from '../tapbar/components/pages/CommonCharts'
import ReportTypes from '../tapbar/components/pages/ReportTypes'
import GeoCharts from '../tapbar/components/pages//GeoCharts'
import DrillConfiguration from '../tapbar/components/pages/DrillConfiguration'



type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {
    return (
    <div>
            <BrowserRouter>
                <Landing>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/vizSettings' element={<VizSettings />} />
                        <Route path='/trellisCharts' element={<TrellisCharts />} />
                        <Route path='/commonCharts' element={<CommonCharts />} />
                        <Route path='/reportTypes' element={<ReportTypes />} />
                        <Route path='/geoCharts' element={<GeoCharts />} />
                        <Route path='/drillConfiguration' element={<DrillConfiguration />} />
                    </Routes>
                </Landing>
                
            </BrowserRouter>
    </div>
        

    )

}
export default View;
