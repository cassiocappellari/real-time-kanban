import { AddCard } from './components/AddCard';
import { Column } from './components/Column';
import { ColumnTitle } from './enums';

function App() {
  return (
    <><div className='flex gap-8 justify-center'>
      <><Column title={ColumnTitle.TO_DO} /><Column title={ColumnTitle.IN_PROGRESS} /><Column title={ColumnTitle.DONE} /></>
    </div>
    <div className='static'>
      <div className="absolute left-10 top-20 h-16 w-16">
        <AddCard />
      </div>
    </div></>
  );
}

export default App;
