import React, { useState } from 'react';
import { Card, List, Button } from 'ui-example-library';
import { getAllFriends, Friend } from 'core-example-library';
import { AppContainer } from './App.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme'
import Hello from '../atoms/Hello';

const renderItem = (item: Friend) => <Hello name={item.name} />;

const App = () => {
  const [showList, setshowList] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Card title={'My simple hello world App'}>
          <Hello name={'Jorge'} />
        </Card>
        <Button onClick={() => { setshowList(!showList) }}>Say Hello to all!!</Button>
        {showList &&
          <List renderItem={renderItem} getData={getAllFriends} />
        }
      </AppContainer >
    </ThemeProvider>
  )
}

export default App;