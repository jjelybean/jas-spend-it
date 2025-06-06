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

      <h1>Welcome to Jas spend it</h1>

      {showPopup && (
        <Popup message="Let's get started" onClose={handleClose} />
      )}

    </div>
  )
}

export default Dashboard
