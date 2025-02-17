import { AddCard } from './components/AddCard';
import { Column } from './components/Column';
import { ColumnTitle } from './enums';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 space-y-6">
            <div className="flex gap-8 w-full justify-center">
                <Column title={ColumnTitle.TO_DO} />
                <Column title={ColumnTitle.IN_PROGRESS} />
                <Column title={ColumnTitle.DONE} />
            </div>

            <div className="fixed bottom-8 left-8">
                <AddCard />
            </div>
        </div>
    );
}

export default App;
