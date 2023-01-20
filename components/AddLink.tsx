import React, { useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

type AddLinkParams = {
  id: string
  setId: React.Dispatch<React.SetStateAction<string>>
}

const AddLink: React.FC<AddLinkParams> = ({ id, setId }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (url.trim()) {
      const config: AxiosRequestConfig = {
        method: 'POST',
        url: '/api/add',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { url },
      }

      const { data } = await axios(config)
      setId(data)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="url"
        className="text-1xl h-10 w-full rounded-sm bg-gray-100 px-3 text-neutral-500 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Enter Your URL ..."
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 rounded-lg bg-red-400 p-3 text-sm text-white transition-all duration-100 hover:bg-red-500"
      >
        Shorten Me
      </button>
    </form>
  )
}

export default AddLink
