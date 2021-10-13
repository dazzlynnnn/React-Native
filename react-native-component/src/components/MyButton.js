import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import propTypes from 'prop-types';

const MyButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => props.onPress()}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>{props.children || props.title}</Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: 'button',
};

MyButton.propTypes = {
    title: propTypes.string.isRequired,
}


export default MyButton;