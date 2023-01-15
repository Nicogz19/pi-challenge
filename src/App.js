import CardList from './Components/CardList'
import PeopleProvider from './Context/PeopleProvider'

function App() {
  return (
    <PeopleProvider>
      <CardList />
    </PeopleProvider>
  );
}

export default App;
