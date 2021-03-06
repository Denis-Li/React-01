import React, { Component } from 'react'
import './Apartments.scss'
import { connect } from 'react-redux';
import Apartment from './apartment/Apartment'
//import axios from '../../axios-orders'
import * as actions from '../../store/actions/index'
import {addApartmentToCart} from '../../store/actions/cart'
import ApartmentLoader from './apartment/ApartmentLoader';
import Categories from './categories/Categories';

import fireDb from '../../store/firebase'


const categoryNames = ["От 20-30 млн", "От 30-50 млн", "От 50-100 млн", "Более 100 млн"];

class Apartments extends Component {

    componentDidMount() {
        this.props.onInitApartamets()
    }

 
    componentDidUpdate(prevState) {
        if (this.props.index !== prevState.index) {
             fireDb.database().ref('apartment').on('value', (snapshot) => {
                if (this.props.index === null) {
                    this.props.onSetApartmentssucces(snapshot.val())
                } else {
                    const arr = snapshot.val().filter(apart => apart.category === this.props.index)
                    this.props.onSetApartmentssucces(arr)
               
                }

            })
        }
    }

    render() {

  const test = (obj) => {
      const apart = {
          img: obj.image,
          title: obj.title,
          price: obj.price,
          priceForM: obj.priceForM,
          area: obj.area,
          lot: obj.lot,
          id: obj.id,
      }
      console.log(obj)
   this.props.onAddItemToCart(apart)
 } 
 
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
                        clicked = {test}
                        category={apartment.category}
                      {...apartment}
                    />))) :
            apartment = Array(8).fill(0).map((__, index) => <ApartmentLoader key={index} />)

        return (
            <section className="apartments">
                <div className="container">
                    <h2 className="apartment-title">Выберите апартаменты в Москва-Сити</h2>
                    <h4 className="apartment-subtitle">Мы включили в наш каталог все апартаменты доступные для покупки в Москва-Сити</h4>
                    <Categories activeItem={this.props.index} onClickItem={this.props.onSetCategoryIndex} items={categoryNames} />
                    <div className="apartments-box">
                        {apartment}
                    </div>
                </div>

            </section>
        )
    }

}

const mapstateToProps = state => {
    return {
        apartaments: state.apartment.items,
        loading: state.apartment.loading,
        index: state.apartment.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToCart: (obj) => dispatch(addApartmentToCart(obj)),
        onInitApartamets: () => dispatch(actions.initApartments()),
        onSetCategoryIndex: (index) => dispatch(actions.setCategoryIndex(index)),
        onSetApartmentssucces: (data) => dispatch(actions.setApartmentsSuccess(data))

    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Apartments)
