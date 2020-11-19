import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};


// U Can Use A Spinner Location Message Up Here As A Standard Msg If U Been Forgotted

// Spinner.defaultProps = {
//    message: 'Please accept location request'
// };

export default Spinner;