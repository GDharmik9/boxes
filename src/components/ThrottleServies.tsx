import React, { useEffect } from 'react'
import Boxes from './Boxes';
import { Link } from 'react-router-dom';

const ThrottleServies = () => {

    const [boxes, setBoxes] = React.useState<number>(0)

    const handleResize = () => {
        setBoxes(boxes + 1);
    };

    const throttle = (func: Function, delay: number) => {
        let lastRun = Date.now();
        return (...args: any[]) => {
            if (Date.now() - lastRun >= delay) {
                func.apply(null, args);
                lastRun = Date.now();
            }
        };
    };
    const throttledResize = throttle(handleResize, 3000);

    useEffect(() => {
        //every 3 seconds only one element is added when the screen is being resized.
        window.addEventListener('resize', throttledResize);


        return () => {
            window.removeEventListener('resize', throttledResize);
        };
    }, [boxes])

    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <h1>Throttle</h1>
            <div>
                <Boxes boxes={boxes} setBoxes={setBoxes} />
            </div>
        </div>
    )
}

export default ThrottleServies