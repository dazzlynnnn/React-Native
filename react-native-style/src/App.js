import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="dazzlynnnn" />
                <Button title="react native" />
                <Input borderColor={theme.blue} />
                <Input borderColor={theme.purple} />
            </Container>
        </ThemeProvider>
    );
};

export default App;