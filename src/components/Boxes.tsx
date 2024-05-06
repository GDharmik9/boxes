import React from 'react'
import _ from 'lodash'

type BoxesProps = {
    boxes: number,
    setBoxes: Function,
}

const Boxes = ({ boxes, setBoxes }: BoxesProps) => {


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBoxes(Number(e.target.value))
    }



    return (
        <>
            <div>
                <input type='text' value={boxes} onChange={changeHandler}></input>
                <button>Submit</button>
            </div>
            <div className='box-warpper' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    boxes > 0 && Array.from({ length: boxes }).map((_, index) =>
                        <div key={index} className="Boxe" style={{ width: "100px", height: "100px", backgroundColor: "grey", margin: "5px" }}>

                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Boxes