import React from 'react'
import windInsuranceImg from '../assets/windstorm.png'
import { DiscordIcon, FacebookIcon, TwitterIcon } from './Icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-[#737373] text-[#FFFFFF]">
      <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato']">
        <div className="bg-[#737373] text-[#FFFFFF] p-10">
          <div className="flex justify-center mt-4">
            <Link to="https://www.twitter.com/" target="_blank">
              <TwitterIcon />
            </Link>
            <Link to="https://discord.com/" target="_blank">
              <DiscordIcon />
            </Link>
            <Link to="https://web.facebook.com/" target="_blank">
              <FacebookIcon />
            </Link>
          </div>

          <div className="text-[#FFFFFF] text-center font-['Roboto'] text-[14px] font-[400] leading-[23px] pb-2 pt-[60px]">
            2023 Go Insure. All Right Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
