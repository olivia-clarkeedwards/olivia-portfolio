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
    <>
      {countArray.length === 1 ? (
        <Image
          className="h-[40vh] w-auto rounded-lg"
          src={`/projects/${name}/${name}-1.png`}
          alt={`Image from ${name}.`}
          width="1000"
          height="1000"
        />
      ) : (
        <Splide
          aria-label={`Image of the the project ${name}.`}
          options={{
            rewind: true,
            rewindByDrag: true,
            focus: 'center',
            autoHeight: true,
            perPage: 2,
            maxWidth: '40%',
          }}
        >
          {countArray.map((index) => (
            <SplideSlide key={`${name}${index}`}>
              <div className="m-2 mt-10 mb-10">
                <Image
                  className="w-auto rounded-lg"
                  src={`/projects/${name}/${name}-${index}.png`}
                  alt={`Image ${index} from ${name}.`}
                  width="1000"
                  height="700"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </>
  )
}

export default GalleryDisplay
