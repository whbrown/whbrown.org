import React, { useState } from 'react';
import WHBrown from './components/WHBrown';
import Page from './styled-components/Page.styled';

const App: React.FC = () => {
  // const [text, setText] = useState<string>('whbrown')
  return (
    <Page className="App">
      <header>
        <WHBrown></WHBrown>
      </header>
    </Page>
  );
}

export default App;
