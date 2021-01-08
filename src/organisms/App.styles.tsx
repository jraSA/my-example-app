import styled from 'styled-components';
import { BaseTheme } from 'ui-example-library';
const { margin } = BaseTheme;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${margin[6]}px;
    margin-bottom: ${margin[6]}px;
`;