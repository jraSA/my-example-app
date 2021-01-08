import React from 'react';
import { render } from '@testing-library/react';
import Hello from '.';

it('renders correctly', () => {
    const tree = render(
        <Hello name={'foo-boo'} />
    );
    expect(tree.container).toMatchSnapshot();
});