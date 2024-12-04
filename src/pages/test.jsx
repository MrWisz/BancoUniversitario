import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../components/Contacts'; // Asegúrate de que la ruta sea correcta

const Test = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Contacts />
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById('root'));

export default Test;