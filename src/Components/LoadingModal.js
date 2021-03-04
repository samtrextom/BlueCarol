/**React Hook import */
import React from 'react'

/**LOADING MODAL******************************************************************************** */
/**this is a component that will display a spinner over a darken screen */
/**used for a waiting screen during async calls */

/**Constructor for the LoadingModal component */
export default function LoadingModal() {

/*********************************************************************************************** */
    /**Rendering */  

    return (
        <div className="loading-modal">
            <div className="loading-modal-icon">...Loading <i className="fas fa-spinner fa-pulse"></i></div>
        </div>
    )
}
