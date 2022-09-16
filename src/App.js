import './App.css';
import Card from './reusableComponents/Card/Card';
import Header from './reusableComponents/Header/Header';
import Text from './reusableComponents/Text/Text';
function App() {
  return (
    <div className='App'>
      <Header>
        <Text style={{ padding: '10px' }}>
          Your destination has high number of reported Covid-19 cases.Your
          health and safety comes first.Please follow government guidelines
          while travelling.
          <a href='/'>Learn More</a>
        </Text>
      </Header>
      <Card />
    </div>
  );
}

export default App;
