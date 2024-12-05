import { AddCard } from './components/AddCard';
import { Column } from './components/Column';

function App() {
  return (
    <><div className='flex gap-8 justify-center'>
      <><Column title='To do' /><Column title='In progress' /><Column title='Done' /></>
    </div>
    <div className='static'>
      <div className="absolute left-10 top-20 h-16 w-16">
        <AddCard />
      </div>
    </div></>
  );
}

export default App;
