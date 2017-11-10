import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
    
    // every proptype should have a definition
    static propTypes = {
        movie: PropTypes.shape({
            title:PropTypes.string.isRequired,
            description: PropTypes.string
        })
    }

    // each prop type should have default Prop.
    static defaultProps = {

    }

    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
                <p></p>
            </div>
        )
    }
}

export default Movie;