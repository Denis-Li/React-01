import React from 'react'

function Categories(props) {
    return (
        <ul className="apartments-sort__list">
            <li className={props.activeItem === null ? ' apartments-item active' : 'apartments-item'} onClick={() => props.onClickItem(null)}>
                Показать все</li>
            {props.items &&
                props.items.map((name, index) => (
                    <li
                        className={props.activeItem === index ? ' apartments-item active' : 'apartments-item'}
                        key={index}
                        onClick={() => props.onClickItem(index)}>
                       
                        {name}
                    </li>
                ))}
        </ul>
    )
}

export default Categories
