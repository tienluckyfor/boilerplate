import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';
// import "../dist/style.min.css"

const App = () => {
  return (
    <div>
      <Button text={"aa"} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
