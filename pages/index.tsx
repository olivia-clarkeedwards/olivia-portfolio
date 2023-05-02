import Header from './components/Header'
import Links from './components/Links'
import Projects from './components/Projects'
import projectData from '../public/projectData.json'
import { useEffect, useState } from 'react'
import { Project } from '@/common/models'

export default function Home() {
  const [data, setData] = useState([] as Project[])

  useEffect(() => setData(projectData), [])

  return (
    <main>
      <Header />
      <Links />
      <Projects projects={data} />
    </main>
  )
}
