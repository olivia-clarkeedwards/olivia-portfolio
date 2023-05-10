import Image from 'next/image'

interface Props {
  name: string
  numberOfImages: number
}

function GalleryDisplay({ name, numberOfImages }: Props) {
  return (
    <div>
      <Image
        className="h-[200px] w-auto"
        src={`/projects/${name}/${name}-1.png`}
        alt="Ping pong"
        width="478"
        height="478"
      />
    </div>
  )
}

export default GalleryDisplay
