import React from 'react';
import { Text, Card, BaseTheme } from 'ui-example-library';
import { myHelloWorldFunction } from 'core-example-library';

interface Props {

}

const App = (props: Props) => {
  return (
    <div style={{ marginTop: BaseTheme.space[6] }}>
      <Card>
        <Text value={myHelloWorldFunction('Jorge')} />
      </Card>
    </div>
  )
}

export default App;