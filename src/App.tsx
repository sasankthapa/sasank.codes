import React from 'react';
import './scss/App.scss';
import Header from './component/HeaderComponent'
import LinkHeader from './component/LinkHeader'
import LinksContainer from './component/LinksContainer'
 
function App() {
  return (
    <div className="LinkApp">
        <LinkHeader/>
        <LinksContainer />
    </div>
  );
}

export default App;
