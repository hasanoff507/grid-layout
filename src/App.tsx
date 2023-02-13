
import './App.css';




import DatasourceExplorer from '../src/components/report/datasourceExplorer'
import QueryBuilder from './components/report/queryBuilder';
import Tapbar from './components/report/tapbar'
// import Dashboard from './components/dashboard/DisignDashboard/index'

function App() {
  return (
    <div style={{ display: "flex", marginTop: "10px", justifyContent: 'space-between', position: "relative" }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <DatasourceExplorer />
        <QueryBuilder />
      </div>
      <div style={{ height: '100%' }}>
        <Tapbar />
      </div>
    </div>
    // <Dashboard />
  );
}

export default App;
