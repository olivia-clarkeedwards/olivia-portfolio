import { useEffect, useState } from 'react'
import { Project } from '../common/models'

import GalleryDisplay from './GalleryDisplay'
import ProjectHeader from './ProjectHeader'
import ProjectDetails from './ProjectDetails'

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
      <section className="flex flex-col text-center p-10 bg-slate-600 text-zinc-100 m-6 items-center rounded-xl">
        <GalleryDisplay
          name={project.imageDetails.name}
          numberOfImages={project.imageDetails.numberOfImages}
        />
        <ProjectHeader project={project} />
        <ProjectDetails project={project} />
      </section>
    </>
  )
}

export default SingleProject
