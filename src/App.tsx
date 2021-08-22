import React, {Suspense, useEffect} from 'react';
import './scss/App.scss';
import Header from './component/HeaderComponent'

const Body = React.lazy(()=>import('./component/BodyComponent'))
 
function App() {
    useEffect(()=>{
        document.ontouchstart=function(e){
            e.preventDefault();
        }
    },[])
  return (
    <div className="App">
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
            <Body />
        </Suspense>
    </div>
  );
}

export default App;
