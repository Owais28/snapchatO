import React from "react";
import {BsGithub, BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFreeCodeCamp} from 'react-icons/fa'
export default function Footer() {
  return <div className="footer-section">
      <ul>
          <li><a href=""><BsGithub/></a></li>
          <li><a href=""><BsFacebook/></a></li>
          <li><a href=""><AiFillInstagram/></a></li>
          <li><a href=""><FaFreeCodeCamp/></a></li>
      </ul>
  </div>
}
