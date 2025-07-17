import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser';
import AddUser from './components/AddUser';
import UserLogin from './components/UserLogin';

function App() {
  const [activeTab, setActiveTab] = useState('users');

  const renderActiveComponent = () => {
    if(activeTab==='user') return <UserList />;
    else if(activeTab==='single') return <SingleUser />;
    else if(activeTab==='add') return <AddUser />;
    else if(activeTab==='login') return <UserLogin />;
    else return <UserList />;
    
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Store API - User Management</h1>
        <nav className="navigation">
          <button 
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            All Users
          </button>
          <button 
            className={activeTab === 'single' ? 'active' : ''}
            onClick={() => setActiveTab('single')}
          >
            Single User
          </button>
          <button 
            className={activeTab === 'add' ? 'active' : ''}
            onClick={() => setActiveTab('add')}
          >
            Add User
          </button>
          <button 
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            User Login
          </button>
        </nav>
      </header>
      
      <main className="main-content">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;
