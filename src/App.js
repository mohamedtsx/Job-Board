import './App.css';
import Navigation from './routes/navigation/navigation.component';

import Button from './component/button/button.component';
import { BUTTON_TYPES } from './component/button/button.component';

function App() {
    const eventHandler = (e) => {
      console.log(e.target.className);
    }

  return (
    <div className="App">
      <Navigation/>
      <Button buttonType={BUTTON_TYPES.base} onClick={eventHandler}>Click me</Button>
      <Button buttonType={BUTTON_TYPES.addToFavorites} onClick={eventHandler}>Click me</Button>
      <Button buttonType={BUTTON_TYPES.removeJob} onClick={eventHandler}>Click me</Button>
    </div>
  );
}

export default App;
