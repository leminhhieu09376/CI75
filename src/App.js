
import './App.css';
import Button from './component/button/Button';
import Title from './component/title/Title';
import StatefylComponent from './component/statefulComponent/StatefylComponent';

function App() {
  let button = ["Save", "Cancel", "Renting", "Buy", "Setauction"]
  let title = ["Hello", "Minh Hiu ne", "Em be 1 chui", "Em be la cua Minh Hiu", "Hihihihi"]
  return (
    <div className="App">

      {
        button.map((button, index) => {
          return <Button button={button} key={index} />
        })
      }
      {
        title.map((title, index) => {
          return <Title title={title} key={index} />
        })
      }
      <StatefylComponent />
    </div>
  );
}

export default App;
