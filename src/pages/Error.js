import React from 'react';
import {Link} from 'react-router-dom'
import page404 from '../assets/img/404.png'
function Error() {
    return (
        <div class="page-404 ">
            <div className="container">
                <div className="page-404__inner">
                    <img src={page404} alt=""/>
                        <div className="page-404__title">Oops! Что-то пошло не так</div>
                        <Link to="/" className=" button button--black">
            <span>Вернуться на главную страницу</span>
          </Link>
            </div>
                </div>
            </div>
    );
}

export default Error;
