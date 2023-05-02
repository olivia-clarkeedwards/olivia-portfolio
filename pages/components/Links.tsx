import { MdLocationCity, MdEmail } from 'react-icons/md'
import { FaGithubSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

import Link from 'next/link'

function Links() {
  return (
    <>
      <MdLocationCity />
      <p>Thorndon, Wellington</p>
      <FaPhoneSquareAlt />
      <p>022 589 3872</p>
      <MdEmail />
      <p>oliviaclarkeedwards@gmail.com</p>
      <FaGithubSquare />
      <BsLinkedin />
      <SiCodewars />
    </>
  )
}

export default Links
