import React from 'react'
import facebookIcon from "../../assets/svg/facebook.svg"
import insatgramIcon from "../../assets/svg/instagram.svg"
import twitterIcon from "../../assets/svg/twitter.svg"
import youtubeIcon from "../../assets/svg/youtube.svg"
import telegramIcon from "../../assets/svg/telegram.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#0d1628] h-18 w-full mt-auto flex items-center justify-center gap-6'>
        <p className='text-white text-sm capitalize'>&copy; 2024 Newspulse-Global Headlines at Your Fingertips</p>
        <div className='flex flex-col text-white'>
            <div className='flex gap-2 items-center justify-start'>
                <h2 className='font-medium text-xs'>Contact Us On :</h2>
                <p className='text-sm'>paniketbhradwaj000@gmail.com ,</p>
                <p className='text-xs'>+91 97291-15445</p>
            </div>
            <div className='flex p-2 gap-4 justify-start items-center'>
                <h2 className='font-medium text-xs -ml-2'>Social Links :</h2>
                <Link href="http://localhost:1234"><img src={facebookIcon} alt="facebook-icon" className='w-4'/></Link>
                <Link href="http://localhost:1234"><img src={insatgramIcon} alt="instagram-icon" className='w-4'/></Link>
                <Link href="http://localhost:1234"><img src={twitterIcon} alt="twitter-icon" className='w-4'/></Link>
                <Link href="http://localhost:1234"><img src={telegramIcon} alt="telegram-icon" className='w-4'/></Link>
                <Link href="http://localhost:1234"><img src={youtubeIcon} alt="youtube-icon" className='w-4'/></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
