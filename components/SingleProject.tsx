import { useEffect, useState } from 'react'
import { Project } from '../common/models'
import { FiExternalLink } from 'react-icons/fi'

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
        <h3 className="font-medium text-xl">{project?.title}</h3>
        {project?.role && <h2 className="font-medium">{project.role}</h2>}
        {project?.tagline && (
          <p className="font-thin italic">{project.tagline}</p>
        )}
        <a href={project?.link} className="flex items-center">
          <FiExternalLink color="white" />
          <p className="p-2">View project on GitHub</p>
        </a>
        {project?.about?.map((par: string) => (
          <p className="p-2 text-left" key={project?.title + par}>
            {par}
          </p>
        ))}
        {project?.challenges && (
          <>
            <h4 className="font-medium">Challenges</h4>
            {project?.challenges?.map((par: string) => (
              <p className="p-2 text-left" key={project?.title + par}>
                {par}
              </p>
            ))}
          </>
        )}
        {project?.softSkills && (
          <>
            <h4 className="font-medium">Soft skills</h4>
            <ul className="flex flex-row justify-center">
              {project?.softSkills?.map((par: string) => (
                <li className="p-2" key={project?.title + par}>
                  {par}
                </li>
              ))}
            </ul>
          </>
        )}
        {project?.conceptualLearning && (
          <>
            <h4 className="font-medium">Conceptual learning</h4>
            <ul className="flex flex-row justify-center">
              {project?.conceptualLearning?.map((par: string) => (
                <li className="p-2" key={project?.title + par}>
                  {par}
                </li>
              ))}
            </ul>
          </>
        )}
        {project?.tech && (
          <>
            <h4 className="font-medium">Tech</h4>
            <ul className="flex flex-row justify-center">
              {project?.tech?.map((par: string) => (
                <li className="p-2" key={project?.title + par}>
                  {par}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  )
}

export default SingleProject
