import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import SidebarOption from './SidebarOption'
import Feed from './Feed'
import Widgets from './Widget';
function App() {
  return (
    <div className="app">
      
      {/* sidebar */}
      <Sidebar />
      
      {/* feed */}
      <Feed/>

      {/* widgets */}
      <Widgets />
      
      
    </div>
  );
}

export default App;
