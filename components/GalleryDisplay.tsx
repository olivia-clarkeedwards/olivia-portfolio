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
            perPage: 3,
            focus: 'center',
          }}
        >
          {countArray.map((index) => (
            <SplideSlide
              key={`${name}${index}`}
              className="align-middle p-5 h-[40vh]"
            >
              <div className="mt-10 mb-10 h-[80%]">
                <Image
                  className="h-[100%] w-[100%] rounded-lg"
                  src={`/projects/${name}/${name}-${index}.png`}
                  alt={`Image ${index} from ${name}.`}
                  width="1000"
                  height="1000"
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
