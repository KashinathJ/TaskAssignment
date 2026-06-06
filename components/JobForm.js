import { useState } from 'react'

export default function JobForm({ onAdded }) {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [saving, setSaving] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setSaving(true)
    await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, company, location, description })
    })
    setTitle('')
    setCompany('')
    setLocation('')
    setDescription('')
    setSaving(false)
    onAdded && onAdded()
  }

  return (
    <form onSubmit={submit} className="job-form">
      <h2>Post a job</h2>
      <input placeholder="Job title" value={title} onChange={e=>setTitle(e.target.value)} required />
      <input placeholder="Company" value={company} onChange={e=>setCompany(e.target.value)} required />
      <input placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} />
      <textarea placeholder="Short description" value={description} onChange={e=>setDescription(e.target.value)} required />
      <button type="submit" disabled={saving}>{saving ? 'Posting…' : 'Post job'}</button>
    </form>
  )
}
