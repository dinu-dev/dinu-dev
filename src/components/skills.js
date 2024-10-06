import React from "react"

export default function Skills({ skills }) {
  return (
    <>
      {skills.map((skill, i, arr) => (
        <span key={skill}>{skill} {arr.length - 1 === i ? `` : <>&middot; </>}</span>
      ))}
    </>
  )
}
