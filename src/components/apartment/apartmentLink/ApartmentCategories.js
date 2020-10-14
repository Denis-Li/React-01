import React from 'react'

function ApartmCategories() {
    return (
        <ul className="apartments-sort__list">
        <li className={activeItem === null ? 'apartments-item active' : 'apartments-item'} onClick={() => onClickItem()}>Показать все</li>
        {items && items.map((name, index)=> {
             <li className={activeItem === index ? ' apartments-item active' : 'apartments-item'} onClick={() => onClickItem()} >От 30-50 млн</li>

        })}
    </ul>
    )
}

export default ApartmentCategories



 
        
