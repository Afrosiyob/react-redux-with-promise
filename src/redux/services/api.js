export const delay = ( ms ) => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve()
        }, ms );
    } )
}

export default class ApiServices {

    testData = async ( url ) => {
        await delay( 2000 )
        const response = await fetch( url )
        const data = await response.json()
        return data
    }

}

