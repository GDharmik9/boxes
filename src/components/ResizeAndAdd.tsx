import React, { useEffect } from 'react'
import Boxes from './Boxes';
import { Link } from 'react-router-dom';

const ResizeAndAdd = () => {

    const [boxes, setBoxes] = React.useState<number>(0)

    const handleResize = () => {
        setBoxes(boxes + 1);
    };

    useEffect(() => {
        //boxes should be added whenever screen is resized
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [boxes])

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                {" "}
                <Link to='/debounce'>Debounce</Link>
                {" "}
                <Link to='/throttle'>Throttle</Link>
            </div>
            <h1>Resize and Add</h1>
            <div>
                <Boxes boxes={boxes} setBoxes={setBoxes} />
            </div>

        </div>
    )
}

export default ResizeAndAdd