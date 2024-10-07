import React from "react"

export default function Employment({ employment }) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-600">{employment.node.frontmatter.date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{employment.node.frontmatter.title} @ <span className="text-[#197b7d] uppercase">{employment.node.frontmatter.company}</span></h3>
      <p className="mb-4 text-sm font-normal text-gray-600" dangerouslySetInnerHTML={{ __html: employment.node.html }}></p>
    </>
  )
}
