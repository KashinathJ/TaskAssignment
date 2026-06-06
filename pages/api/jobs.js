let jobs = [
  { id: '1', title: 'Frontend Engineer', company: 'Acme', location: 'Remote', description: 'Build beautiful UIs.' },
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(jobs)
    return
  }

  if (req.method === 'POST') {
    const { title, company, location, description } = req.body
    if (!title || !company || !description) {
      res.status(400).json({ error: 'Missing fields' })
      return
    }
    const newJob = { id: String(Date.now()), title, company, location, description }
    jobs.unshift(newJob)
    res.status(201).json(newJob)
    return
  }

  res.setHeader('Allow', ['GET','POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
