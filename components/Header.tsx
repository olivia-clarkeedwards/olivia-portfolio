import Image from 'next/image'
import Headshot from '../public/Headshot.png'

function Header() {
  return (
    <>
      <Image
        src={Headshot}
        alt="Photo of a girls face, she has long brown and blonde hair and is wearing a colourful striped singlet"
        width={200}
      />
      <header className="block w-full bg-slate-800 text-zinc-50 p-10 pb-0">
        <h1 className="text-lg text-6xl tracking-wide">
          OLIVIA <span className="font-thin">CLARKE-EDWARDS</span>
        </h1>
        <h2 className="font-medium text-2xl p-4">
          FULL STACK SOFTWARE DEVELOPER
        </h2>
      </header>
    </>
  )
}

export default Header
