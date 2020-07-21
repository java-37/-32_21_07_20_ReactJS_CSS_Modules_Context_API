import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



const posts = [
  {
    postId:'123',
    date:'12/12/12',
    author:'John',
    shordDesc:'Some desc',
    content:'Full text',
    comments:[
      {
        author:'Jack',
        text:'Good news'
      }
    ]
  }
];
