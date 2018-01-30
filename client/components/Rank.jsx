import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import SpeciesListing from './SpeciesListing'

import ranks from '../../data/ranks'

const Rank = ({match}) => {
  const {rank, name} = match.params
  const classification = ranks[rank].filter(item => item.name === name)[0]

  return (
    <Router>
      <div className='rank-listing'>
        <h2>{name}</h2>
        <p>{classification.description}</p>
        <Link to={`${match.url}/species`}>Show species</Link>
        <Route path='/rank/:rank/:name/species' component={SpeciesListing} />
      </div>
    </Router>
  )
}

export default Rank