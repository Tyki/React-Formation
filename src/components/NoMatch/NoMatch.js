import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      Il n'y à rien ici...
      <Link to='/'>Retour à l'accueil</Link>
    </div>
  )
}

export default NoMatch