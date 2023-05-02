import SingleProject from './SingleProject'

import { Project } from './../../common/models'

interface Props {
  projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <>
      {projects.map((project) => (
        <SingleProject project={project} key={project.date + project.title} />
      ))}
    </>
  )
}

export default Projects
