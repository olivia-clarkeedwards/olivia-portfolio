import { Project } from '@/common/models'
import { FiExternalLink } from 'react-icons/fi'

interface Props {
  project: Project
}

function ProjectHeader({ project }: Props) {
  return (
    <>
      {' '}
      <h3 className="font-medium text-xl">{project?.title}</h3>
      {project?.role && <h2 className="font-medium">{project.role}</h2>}
      {project?.tagline && (
        <p className="font-thin italic">{project.tagline}</p>
      )}
      <a href={project?.link} className="flex items-center">
        <FiExternalLink color="white" />
        <p className="p-2">View project on GitHub</p>
      </a>
    </>
  )
}

export default ProjectHeader
