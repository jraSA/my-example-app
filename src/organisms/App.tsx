import React from 'react';
import { Text, Card } from 'ui-example-library';
import { myHelloWorldFunction } from 'core-example-library';
import { AppContainer } from './App.styles';

interface Props {

}

const App = (props: Props) => {
  return (
    <AppContainer>
      <Card>
        <Text value={myHelloWorldFunction('Jorge')} />
      </Card>
    </AppContainer >
  )
}

export default App;