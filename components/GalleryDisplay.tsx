import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'

interface Props {
  name: string
  numberOfImages: number
}

function GalleryDisplay({ name, numberOfImages }: Props) {
  let countArray = []

  for (let i = 1; i <= numberOfImages; i++) {
    countArray.push(i)
  }

  return (
    <Splide
      aria-label={`Image of the the project ${name}.`}
      options={{
        rewind: true,
        rewindByDrag: true,
        width: '50vw',
      }}
    >
      {countArray.map((index) => (
        <SplideSlide key={`${name}${index}`} className="p-5">
          <Image
            className="max-h-[40vh] w-auto rounded-lg"
            src={`/projects/${name}/${name}-${index}.png`}
            alt={`Image ${index} from ${name}.`}
            width="1000"
            height="1000"
          />
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default GalleryDisplay
