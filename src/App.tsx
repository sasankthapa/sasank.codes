import React, {useEffect, useState} from 'react';
import './scss/App.scss';
import Header from './component/HeaderComponent'
import Body from './component/BodyComponent'
 
function App() {
  const [renderBody,setRenderBody] = useState(false);

  useEffect(()=>{
      setTimeout(()=>setRenderBody(true),3000);
  },[])

  return (
    <div className="App">
        <Header/>
        {renderBody?<Body/>:''}
    </div>
  );
}

export default App;
