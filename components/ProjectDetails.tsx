import { Project } from '@/common/models'

interface Props {
  project: Project
}

function ProjectDetails({ project }: Props) {
  return (
    <div>
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
          <ul className="flex flex-row flex-wrap justify-center">
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
          <ul className="flex flex-row flex-wrap justify-center">
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
          <ul className="flex flex-row justify-center flex-wrap">
            {project?.tech?.map((par: string) => (
              <li className="p-2" key={project?.title + par}>
                {par}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ProjectDetails
