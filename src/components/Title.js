import React from 'react';
import Typist from 'react-typist';

function Title(props) {
            return (
            <h1 className="display-3">
                <Typist>
                    {props.text}
                </Typist>
            </h1>
            );
}
export default Title;
