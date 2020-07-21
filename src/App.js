import React from 'react';
import Card from './css/components/card/Card';
import Car from './css/components/car/Car';
import CounterContainer from './context/CounterContainer';

const styles = {
  display:'flex',
  flexWrap:'wrap'
}
function App() {
  return (
    <div style={{width:'1000px',margin:'100px auto'}}>
      <div style={styles}>
        <Card title='Title' subtitle='Subtitle'/>
        <Car />
        
      </div>
      <hr />
      <CounterContainer />
    </div>
  );
}

export default App;
