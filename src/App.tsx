import React, {Suspense, useEffect} from 'react';
import './scss/App.scss';
import Header from './component/HeaderComponent'
import ThreeBody from './component/threejs/MainRenderer'

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
        <Suspense fallback={null}>
            <ThreeBody />
        </Suspense>
    </div>
  );
}

export default App;
