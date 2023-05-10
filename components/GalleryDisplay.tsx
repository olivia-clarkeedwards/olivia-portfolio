import Image from 'next/image'

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
      {countArray.map((index) => (
        <Image
          className="h-[40vh] w-auto"
          src={`/projects/${name}/${name}-${index}.png`}
          alt={name}
          width="1000"
          height="1000"
          key={`${name}${index}`}
        />
      ))}
    </>
  )
}

export default GalleryDisplay
