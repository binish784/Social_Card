import React from 'react';
import './App.css';
import SocialCard from './components/card';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <SocialCard img='https://images.alphacoders.com/511/thumb-1920-511052.jpg' description="Learn by doing, you dont have to be great to start but start to be great." title='The Practical Dev' author='binish784' subTitle='Learning React ? Start Small.'/>
    </div>
  );
}

export default App;
