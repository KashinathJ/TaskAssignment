import { useEffect, useState } from 'react'
import JobList from '../components/JobList'
import JobForm from '../components/JobForm'

export default function Home() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchJobs = async () => {
    setLoading(true)
    const res = await fetch('/api/jobs')
    const data = await res.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => { fetchJobs() }, [])

  return (
    <div className="container">
      <header>
        <h1>Minimal Job Board</h1>
      </header>
      <main>
        <JobForm onAdded={fetchJobs} />
        {loading ? <p>Loading…</p> : <JobList jobs={jobs} />}
      </main>
    </div>
  )
}
