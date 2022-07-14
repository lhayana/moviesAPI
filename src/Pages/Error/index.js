import { Link } from 'react-router-dom';
import './error.css';

function Error(){
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Error;