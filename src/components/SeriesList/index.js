import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Default from '../Default';


const SeriesListItem = ({ series }) => (
    <li className='show-item'>
            <Link to={'series/' + series.show.id}>
                {
                    (series.show.image != null
                    &&
                    <div><img alt="Show icon" src={(series.show.image.medium)}/></div>)
                    ||
                    <Default />
                }
                {series.show.name}
            </Link>
    </li>
)
const SeriesList = (props) => {
    return (
        <div>
            <ul className='series-list'>
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id}/>
                ))}
            </ul>
        </div>
);
}

export default SeriesList;