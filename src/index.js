import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
    <h3>Eric Zemmour</h3>
        <h4>📞  88 88 88 88 88 88</h4>
        <button>Delete</button>
        <h3>Jean Marie Le pen</h3>
        <h4>📞 01 69 69 69 69</h4>
        <button>Delete</button>
        <h3>Maréchal Pétain</h3>
        <h4>📞 01 39 45 39 45</h4>
        <button>Delete</button>
        <h3>Pierre Laval</h3>
        <h4>📞 01 88 88 88 88</h4>
        <button>Delete</button>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
