import { Project } from '../../common/models'

interface Props {
  project: Project
}

function SingleProject({ project }: Props) {
  return (
    <>
      <h3>{project.title}</h3>
      {project.role && <h2>{project.role}</h2>}
      {project.description.map((par) => (
        <p key={project.title + par}>{par}</p>
      ))}
    </>
  )
}

export default SingleProject
