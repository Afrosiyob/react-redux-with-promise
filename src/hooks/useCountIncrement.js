import { useState } from 'react'

import PropTypes from 'prop-types'

export const useCountIncrement = ( initialCount = 0 ) => {

    const [ count, setCount ] = useState( initialCount )

    const incrementCount = () => {
        setCount( prevCount => prevCount + 1 )
    }


    return {
        count,
        incrementCount
    }

}

useCountIncrement.propTypes = {
    initalCount: PropTypes.number.isRequired
}