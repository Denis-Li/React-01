import React from 'react'



const categoryNames = ['От 20-30 млн', 'От 30-50 млн', 'От 50-100 млн', 'Более 100 млн'];



function Categories() {
    return (
        <ul className="apartments-sort__list">
            <li className={activeItem === null ? 'active' : ''} onClick={() => onClickItem()}>
                Показать все</li>
            {/* {items &&
                items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        key={index}
                        onClick={() => onClickItem(index)}>
                        {' '}
                        {name}
                    </li>
                ))} */}
        </ul>
    )
}

export default Categories
