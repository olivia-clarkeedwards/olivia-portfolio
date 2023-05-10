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
    <Splide aria-label={`Image of the the project ${name}.`}>
      {countArray.map((index) => (
        <SplideSlide key={`${name}${index}`}>
          <Image
            className="h-[40vh] w-auto"
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
