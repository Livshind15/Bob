import React from 'react';
import './serviceDescription.scss';

const ServiceDescription = () => {
    return (
        <div className={'serviceDescription-container'}>
            <div className={'service-name-avatar-container'}>
                <div className={'service-avatar-border-container'}>
                    <div className={'service-avatar-container'}>
                        <img
                            className={'avatar-img'}
                            src={
                                'https://camo.githubusercontent.com/9e4fe7914c7357861223aa535d7ca9858253c96e/68747470733a2f2f6b6f6e6768712e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f6b6f6e672d6c6f676f2d6769746875622d726561646d652e706e67'
                            }
                        ></img>
                    </div>
                </div>
                <div className={'service-name-container'}>Kong</div>
            </div>
        </div>
    );
};

export default ServiceDescription;
