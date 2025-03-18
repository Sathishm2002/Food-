import React from 'react'
import './AppDownloader.css'
import { assets } from '../../assets/assets'

const AppDownloader = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Experience Download <br/>Tomato App</p>
        <div className="app-download-platform">
            <a href="https://play.google.com"><img  src={assets.play_store} alt="" /></a>
            <a href="https://www.apple.com"><img src={assets.app_store} alt="" /></a>
        </div>
    </div>
  )
}

export default AppDownloader