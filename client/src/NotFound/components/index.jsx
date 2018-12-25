import React from 'react';
import './index.scss';

const NotFoundView = props => {
    return (
        <div className={'not-found-container'}>
            <div className={'not-found-container__title'}>Страница не найдена</div>
            <div className={'not-found-container__link-to-home-wrapper'}>
                <span
                    className={'not-found-container__link-to-home'}
                    onClick={()=>{props.goToHomePage()}}
                >
                    На главную
                </span>
            </div>
        </div>
    );
}

export default NotFoundView;
