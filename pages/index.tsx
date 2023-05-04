import Header from '../components/Header'
import Links from '../components/Links'
import projectData from '../public/projectData.json'
import { useEffect, useState } from 'react'
import { Project } from '@/common/models'

export default function Home() {
  const [data, setData] = useState([] as Project[])

  useEffect(() => setData(projectData), [])

  return (
    <main className="min-h-screen bg-slate-800 relative text-center justify-items">
      <div className=" flex flex-col m-auto min-h-screen pt-[10vh] pb-[10vh] items-center">
        <Header />
        <Links />
      </div>
    </main>
  )
}
