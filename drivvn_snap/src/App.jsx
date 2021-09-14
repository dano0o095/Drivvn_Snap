import './App.css'
import CardArea from './components/CardArea'
import api from './utils/api'

function App() {
  const handleClick = () => {
    console.log('here')
    api.drawCard()
  }

  return (
    <div className="App">
      <h1>SNAP!</h1>
      <CardArea />
      <button type="button" class="btn btn-primary" onClick={() => handleClick()}>Primary</button>
    </div>
  )
}

export default App;
