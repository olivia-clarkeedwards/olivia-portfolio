import Image from 'next/image'
import Headshot from '../public/profile/Headshot.png'

function Header() {
  return (
    <>
      <Image
        className="h-[200px] w-auto"
        src={Headshot}
        alt="Photo of a girls face, she has long brown and blonde hair and is wearing a colourful striped singlet"
      />
      <header className="block w-full bg-slate-800 text-zinc-50 p-10 pb-0">
        <h1 className="text-4xl font-medium tracking-wide">
          OLIVIA <span className="font-light">CLARKE-EDWARDS</span>
        </h1>
        <h2 className="font-medium font-thin text-2xl p-4">
          FULL STACK SOFTWARE DEVELOPER
        </h2>
      </header>
    </>
  )
}

export default Header
