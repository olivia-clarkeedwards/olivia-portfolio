import { BsLinkedin } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'
import { ImGithub } from 'react-icons/im'

function Socials() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex p-4">
        <a target="_blank" href="https://github.com/olivia-clarkeedwards">
          <ImGithub size="80" color="zinc-500" />
        </a>
      </div>
      <div className="flex p-4">
        <a target="_blank" href="https://www.linkedin.com/in/oliviac-e">
          <BsLinkedin size="80" color="zinc-500" />
        </a>
      </div>
      <div className="flex p-4">
        <a
          target="_blank"
          href="https://www.codewars.com/users/olivia-clarkeedwards"
        >
          <SiCodewars size="80" color="zinc-500" />
        </a>
      </div>
    </div>
  )
}

export default Socials
