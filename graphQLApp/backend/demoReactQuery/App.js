import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import SubComponent from './components/SubComponent';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SubComponent />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
