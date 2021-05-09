import React from 'react'
import { useCountIncrement } from '../hooks/useCountIncrement'

const CountBtn = () => {


    const { count, incrementCount } = useCountIncrement( 10 );

    return (
        <div>
            <button onClick={ incrementCount } > clicked me { count } times </button>
        </div>
    )
}

export default CountBtn
