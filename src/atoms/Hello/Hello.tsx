import React, { ReactElement } from 'react'
import { Text } from 'ui-example-library';
import { myHelloWorldFunction } from 'core-example-library';

interface Props {
    name: string
}

export default function Hello({ name }: Props): ReactElement {
    return (
        <Text>{myHelloWorldFunction(name)}</Text>
    );
}
