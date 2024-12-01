import { Column } from './components/Column';

function App() {
  return (
    <div className='flex gap-8 justify-center'>
      <><Column title='To do' /><Column title='In progress'/><Column title='Done'/></>
    </div>
  );
}

export default App;
