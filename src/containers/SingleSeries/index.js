import React, { Component } from "react";
import {useParams} from 'react-router-dom';
import Loader from '../../components/Loader';
import Default from '../../components/Default';

const singleSeriesHook = (Component) => {
        return props => <Component {...props} params={useParams()} />;
}

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.params;
        // this.fetchData(id);

        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => this.setState({ show: json }))
    }

    // fetchData = id => {
    //     console.log(id)
    // };

    render () {
        const { show } = this.state;

        return (
            <div>
                { show == null && <Loader />}
                {
                    show != null
                    &&
                    <div>
                        <p>
                        {
                            (show.image != null
                            &&
                            <div><img alt="Show Cover" src={(show.image.medium)}/></div>)
                            ||
                            <Default />
                        }
                        </p>
                        <p>{show.name}</p>
                        <p>Language: {show.language}</p>
                        <p>Premiered: {show.premiered}</p>
                        <p>Rating: {show.rating.average}</p>
                        <p>Episodes: {show._embedded.episodes.length}</p>
                    </div>
                }
            </div>
        )
    }
}


// function SingleSeries() {
//     const params = useParams();
//     // console.log(params);
    
//     return <p>Show id is 👉️ {params.id}</p>;
// }


export default singleSeriesHook(SingleSeries);