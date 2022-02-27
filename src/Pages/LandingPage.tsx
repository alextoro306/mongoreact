import React from 'react'
import {Link} from "react-router-dom"

type LandingPageProps = {

}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
      Links For
      <p></p>
      <Link to="/statistics" >
      FeedBack
      </Link>
      <p></p>
      <Link to="/phonebook" >
      Phonebook
      </Link>
    </div>
  )
}

export default LandingPage
