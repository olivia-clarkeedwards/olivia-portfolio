import SingleProject from './SingleProject'

import { Project } from '../common/models'
import { useEffect, useState } from 'react'

interface Props {
  projects: Project[]
}

function Projects({ projects }: Props) {
  const [allProjects, setAllProjects] = useState([] as Project[])

  useEffect(() => {
    setAllProjects(projects)
  }, [projects])

  return (
    <>
      {allProjects?.map((project: Project) => (
        <SingleProject project={project} key={project.date + project.title} />
      ))}
    </>
  )
}

export default Projects
