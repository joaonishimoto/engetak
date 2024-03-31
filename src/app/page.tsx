'use client'

import { redirect } from "next/navigation";

export default function Page() {
  return (
    <div>
      <button onClick={redirect('/users')}>
        users
      </button>
    </div>
  )
}