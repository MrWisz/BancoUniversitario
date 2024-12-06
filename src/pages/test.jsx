import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../components/Contacts'; // Asegúrate de que la ruta sea correcta
import SuccessfulTransfer from '../components/SuccessfulTransfer';

const Test = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <SuccessfulTransfer />
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById('root'));

export default Test;