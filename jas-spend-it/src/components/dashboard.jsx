import React, { useState, useEffect } from 'react'
import Popup from './popup'

function Dashboard() {

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setShowPopup(true)
  }, [])

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <div>

      <h1>Welcome to the Home Page</h1>

      {showPopup && (
        <Popup message="You have been redirected here!" onClose={handleClose} />
      )}

    </div>
  )
}

export default Dashboard
