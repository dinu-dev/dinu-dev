import React from "react"

export default function Education({ name, degree, date, location }) {
  return (
    <>

      <h3 className="text-base font-semibold text-white">{degree}</h3>
      <div className="text-sm text-white">{name}</div>

      <div className="flex justify-between items-center mt-3">
        <time className="text-xs font-normal leading-none text-white">{date}</time>
        <p className="text-xs font-normal text-white">{location}</p>
      </div>
    </>
  )
}
