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
          className="h-[200px] w-auto"
          src={`/projects/${name}/${name}-${index}.png`}
          alt={name}
          width="478"
          height="478"
          key={`${name}${index}`}
        />
      ))}
    </>
  )
}

export default GalleryDisplay
