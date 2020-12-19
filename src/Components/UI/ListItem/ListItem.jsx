import React from 'react';
import './ListItem.scss';

const ListItem = (props) => {
    return (
        <li className='ProjectDescription'><i class="fas fa-check"></i>{props.children}</li>
    )
}

export default ListItem
