import Header from '../components/Header'
import Links from '../components/Links'
import projectData from '../public/projectData.json'
import { useEffect, useState } from 'react'
import { Project } from '@/common/models'

export default function Home() {
  const [data, setData] = useState([] as Project[])

  useEffect(() => setData(projectData), [])

  return (
    <main className="text-center min-h-screen bg-slate-800 relative">
      <div className="flex flex-col m-auto min-h-screen pt-20 items-center">
        <Header />
        <Links />
      </div>
    </main>
  )
}
