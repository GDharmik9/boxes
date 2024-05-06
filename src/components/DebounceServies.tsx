import React, { useEffect } from 'react';
import Boxes from './Boxes';
import { Link } from 'react-router-dom';

const DebounceServies = () => {

    const [boxes, setBoxes] = React.useState<number>(0)

    const handleResize = () => {
        setBoxes(boxes + 1);
    };

    const debounce = (func: Function, delay: number) => {
        let timer: any;
        return (...args: any[]) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };
    const debouncedResize = debounce(handleResize, 3000);

    useEffect(() => {
        //every 3 seconds only one element is added when the screen is being resized.
        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, [boxes])

    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <h1>Debounce Services</h1>
            <div>
                <Boxes boxes={boxes} setBoxes={setBoxes} />
            </div>
        </div>
    )
}

export default DebounceServies