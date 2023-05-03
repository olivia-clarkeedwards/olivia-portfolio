import { FaPhoneSquareAlt } from 'react-icons/fa'
import { MdLocationCity, MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <div className="w-full flex justify-center content-center mb-4">
      <div className="flex-col">
        <a className="flex p-1" target="_blank" href="tel:+64225893872">
          <FaPhoneSquareAlt size="30" color="zinc-500" />
          <p className="ml-2">022 589 3872</p>
        </a>

        <div className="flex p-1">
          <MdLocationCity size="30" color="zinc-500" />
          <p className="ml-2">Thorndon, Wellington</p>
        </div>
        <a
          className="flex p-1"
          target="_blank"
          href="mailto:oliviaclarkeedwards@gmail.com"
        >
          <MdEmail size="30" color="zinc-500" />
          <p className="ml-2">oliviaclarkeedwards@gmail.com</p>
        </a>
      </div>
    </div>
  )
}

export default Contact
