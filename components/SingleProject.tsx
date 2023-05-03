import { useEffect, useState } from 'react'
import { Project } from '../common/models'
import Image from 'next/image'

interface Props {
  project: Project
}

function SingleProject({ project }: Props) {
  const [currentProject, setCurrentProject] = useState({} as Project)

  useEffect(() => {
    setCurrentProject(project)
  }, [project])

  return (
    <>
      <Image src="" alt="" />
      <section className="flex flex-col text-left p-10 bg-slate-600 text-zinc-100 m-6 rounded-xl">
        <h3>{project?.title}</h3>
        {project?.role && <h2 className="font-medium">{project.role}</h2>}
        {project?.description?.map((par: string) => (
          <p key={project?.title + par}>{par}</p>
        ))}
      </section>
    </>
  )
}

export default SingleProject
