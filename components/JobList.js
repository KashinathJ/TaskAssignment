export default function JobList({ jobs }) {
  if (!jobs || jobs.length === 0) return <p>No jobs posted yet.</p>
  return (
    <ul className="job-list">
      {jobs.map(job => (
        <li key={job.id} className="job">
          <h3>{job.title}</h3>
          <p>{job.company} — {job.location}</p>
          <p className="desc">{job.description}</p>
        </li>
      ))}
    </ul>
  )
}
