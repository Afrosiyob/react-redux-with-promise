import React from 'react'
import PropTypes from 'prop-types'

const Link = props => {

    const { title } = props


    console.log( title );


    return (
        <div>
            this is link
        </div>
    )
}

Link.propTypes = {
    title: PropTypes.string.isRequired
}

export default Link
