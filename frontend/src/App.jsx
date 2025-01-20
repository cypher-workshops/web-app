import { useState } from 'react';
import './App.css';
import HomePage from './homepage/HomePage.jsx';
import Widgets from './widgets/Widgets.jsx';
import Components from './components/Components.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Widgets':
        return <Widgets />;
      case 'Components':
        return <Components />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <a
          className={`nav-link ${currentPage === 'Home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Home')}>Home</a>
        <a
          className={`nav-link ${currentPage === 'Widgets' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Widgets')}>Widgets</a>
        <a
          className={`nav-link ${currentPage === 'Components' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Components')}>Components</a>
      </nav>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
