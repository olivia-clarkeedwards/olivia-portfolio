import { MdLocationCity, MdEmail } from 'react-icons/md'
import { FaGithubSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

import Link from 'next/link'

function Links() {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <div className="flex">
          <MdLocationCity size="30" />
          <p>Thorndon, Wellington</p>
        </div>
        <div className="flex">
          <FaPhoneSquareAlt size="30" />
          <p>022 589 3872</p>
        </div>
        <div className="flex">
          <MdEmail size="30" color="white" />
          <p>oliviaclarkeedwards@gmail.com</p>
        </div>
      </div>

      <div className="w-1/2">
        <FaGithubSquare size="30" />
        <BsLinkedin size="30" />
        <SiCodewars size="30" />
      </div>
    </div>
  )
}

export default Links
