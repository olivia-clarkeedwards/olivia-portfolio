import Contact from './Contact'
import Socials from './Socials'
import Link from 'next/link'

import { RxDoubleArrowRight } from 'react-icons/rx'

function Links() {
  return (
    <div className="bg-slate-800 text-zinc-50 p-4">
      <Contact />
      <Socials />
      <Link className="flex justify-center items-center" href="/projects">
        <RxDoubleArrowRight color="zinc-500" />
        <p className="ml-2">View projects</p>
      </Link>
      <a
        download
        className="flex justify-center items-center"
        href="/profile/OliviasResumeApril2023.pdf"
      >
        <RxDoubleArrowRight color="zinc-500" />
        <p className="ml-2">Download CV</p>
      </a>
    </div>
  )
}

export default Links
