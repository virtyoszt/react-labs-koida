import './App.css';
import Table from './Table';
import ComponentFunction from './ComponentFunction';
import SubComponents from './SubComponents';
import SelectTowns from './SelectTowns';
import ComponentStateSelect from './ComponentStateSelect';
function App() {
  return (
    <div className="App">
    <Table />
    <ComponentFunction name="Роман Савіцький" group="ІПЗк-20-1" name2="Койди Владислава" />
    <SubComponents />
    <SelectTowns />
    <ComponentStateSelect />
    </div>
  );
}

export default App;
