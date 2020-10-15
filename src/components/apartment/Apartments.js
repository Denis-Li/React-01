import React, { Component } from 'react'
import './Apartments.scss'
//import apartPhoto from './img/apart-photo.jpg';
//import apartPhoto_1 from './img/apart-photo1.png';
import { connect } from 'react-redux';
import Apartment from './apartment/Apartment'
//import axios from '../../axios-orders'
import * as actions from '../../store/actions/index'
import apartment from './apartment/Apartment';
import ApartmentLoader from './apartment/ApartmentLoader';


class Apartments extends Component {


    componentDidMount() {
        this.props.onInitApartamets()
        
    }

    render() {
        let apartment = null
        !this.props.loading ?  
              apartment = (
                this.props.apartaments.map((apartment) => (
                    <Apartment
                     key={apartment.id}
                     image={apartment.image}
                     title={apartment.title}
                     lot={apartment.lot}
                     price={apartment.price}
                     area={apartment.area}
                     priceForM={apartment.priceForM}
                     floor={apartment.floor}
                     category={apartment.category}
                       /> )))  :   
                       apartment =  Array(8).fill(0).map((__,index) => <ApartmentLoader key={index}/>)
       
        return (
            <section className="apartments">
                <div className="container">
                    <h2 className="apartment-title">Выберите апартаменты в Москва-Сити</h2>
                    <h4 className="apartment-subtitle">Мы включили в наш каталог все апартаменты доступные для покупки в Москва-Сити</h4>

                    <ul className="apartments-sort__list">
                        <li className="apartments-item">Показать все</li>
                        <li className="apartments-item">От 20-30 млн</li>
                        <li className="apartments-item">От 30-50 млн</li>
                        <li className="apartments-item">От 50-100 млн</li>
                        <li className="apartments-item">Более 100 млн</li>
                    </ul>
                    <div className="apartments-box">
                        {apartment}
                   {/* {this.props.loading ?
                     this.props.apartaments.map((apartment) => (
                        <Apartment
                         key={apartment.id}
                           /> )) : Array(8).fill(0).map((__,index) => <ApartmentLoader key={index}/>) 
                           
                     } */}
                        {/* <div className="apartaments-card">
                            <div className="apartments-img">
                                <img src="https://firebasestorage.googleapis.com/v0/b/realestate-84150.appspot.com/o/apartament-images%2Fapart-photo.jpg?alt=media&token=705fe1df-041c-4ea6-8f7c-21b088f807b1" alt="" />
                            </div>
                            <div className="apartments-card__inner">
                                <div className="apartaments-card__title">Апартаменты в «башне ОКО»</div>
                                <div className="apartaments-card__lot">Лот № 4536</div>
                                <div className="apartaments-card__info">
                                    <div className="apartaments-card__price">25 600 000 ₽</div>
                                    <div className="apartaments-carf__area">Площадь 70 м²</div>
                                </div>
                                <div className="apartaments-card__desc">
                                    <div className="apartaments-card__for">365 714 ₽ за м²</div>
                                    <div className="apartaments-carf__floor">Этаж 52</div>
                                </div>
                            </div>
                            <a href="" className="apartaments-select">Назначить просмотр</a>
                        </div> */}



                    </div>
                </div>

            </section>
        )
    }

}

const mapstateToProps = state => {
    return {
        apartaments: state.apartment.items,
        loading: state.apartment.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {

        onInitApartamets: () => dispatch(actions.initApartments()),


    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Apartments)
