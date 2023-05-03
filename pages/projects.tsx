import Projects from './components/Projects'
import projectData from '../public/projectData.json'
import { useEffect, useState } from 'react'
import { Project } from '@/common/models'

export default function ProjectPage() {
  const [data, setData] = useState([] as Project[])

  useEffect(() => setData(projectData), [])

  return <Projects projects={data} />
}
