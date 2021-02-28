import React from 'react';
import {Link} from  'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Désole la page n'hexiste pas </h2>
            <Link exact to="./">Retour à l'Accueil</Link>
        </div>
    )
}

export default NotFound

