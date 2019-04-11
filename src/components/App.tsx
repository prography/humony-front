import React from 'react';
import '../styles/reset.scss';
import PageTemplate from './common/PageTemplate';
import Main from './Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <PageTemplate>
        <Main />
      </PageTemplate>
    </div>
  );
};

export default App;
