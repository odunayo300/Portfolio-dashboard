import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div>
      <Link to={"/"}>
       go back to home page
      </Link>
    </div>
  )
}
