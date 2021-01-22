import React from 'react'
import GlobalStyles from './globalStyles';


const layout = ({ children }) => {

    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )

}


export default layout;