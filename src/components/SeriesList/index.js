import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Default from '../Default';
import useStyles from '../Grid/Grid.styles';

const SeriesListItem = ({ series }) => (
    // <li className='list-item'>
    <div style={{ padding: 20}}>

            <Link to={'series/' + series.show.id}>
                    {
                        (series.show.image != null
                            &&
                            <div>
                            <img alt="Show icon" src={(series.show.image.medium)}/>
                        </div>
                        )
                        ||
                        <Default />
                    }
                    {series.show.name}
            </Link>
    </div>
    // </li>
)
const SeriesList = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            {/* <ul className='list'> */}
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id}/>
                ))}
            {/* </ul> */}
        </div>
);
}

export default SeriesList;