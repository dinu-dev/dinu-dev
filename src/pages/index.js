import * as React from "react"
import { DevicePhoneMobileIcon, AtSymbolIcon, LinkIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Employment from "../components/employment"
import Skills from "../components/skills"
import Education from "../components/education"
import Language from "../components/language"

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-4">
          {/* Column 1 */}
          <div className="md:col-span-3 p-10">
            <div className="main-head">
              <h1 className="text-4xl font-bold uppercase font-bold">{data.site.siteMetadata.title}</h1>
              <h3 className="text-[#1ab0b3]">{data.site.siteMetadata.description}</h3>
              <div className="text-[##4f5252] text-xs flex items-center justify-items-center gap-3 mt-2 mb-2">
                <a href="tel:+37378582197" className="group flex items-center gap-1"><DevicePhoneMobileIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" />+373-78582197</a>
                <a href="mailto:rodnitchi@gmail.com" className="group flex items-center gap-1"><AtSymbolIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" /> <span>rodnitchi@gmail.com</span></a>
                <a href="/" className="group flex items-center gap-1"><LinkIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" />dinu.dev</a>
                <a target="_blank" rel="noreferrer" className="group flex items-center gap-1" href="https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u">
                  <MapPinIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" /> <span>Chisinau, Moldova</span>
                </a>
              </div>
            </div>
            <h2 className="uppercase text-2xl mb-4 mt-20 text-base text-[#384347]">About Me</h2>
            <hr className="mb-4" />
            <p className="text-sm text-gray-700">
              Experienced Drupal Developer with a strong background in full-cycle development and DevOps.
              Successfully delivered large-scale projects including e-commerce, healthcare solutions, and corporate websites.
              Skilled in Drupal, Node.js, and Next.js, with a focus on scalability and delivery. Experience in collaborating with cross-functional teams and delivering high-quality solutions.
              Ready to apply expertise and offer fresh perspectives to new projects.
            </p>
            <div className="experience text-[#384347]">
              <h2 className="uppercase text-2xl mb-4 mt-20 text-base text-[#384347]">Experience</h2>
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {data.allEmploymentHistory.edges.map(employment => (
                  <li className="mb-10 ms-4">
                    <Employment employment={employment} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* Column 2 */}
          <div className="md:col-span-1 bg-[#006666] relative">
            <div className="flex justify-center items-center p-10">
              <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-black">
                <StaticImage src="../images/dinu.png" alt="Dinu Rodnitchi" objectFit="cover" />
              </div>
            </div>
            <div className="pl-10 pr-10">
              <ul className="flex items-center justify-center gap-2">
                <li><a className="flex items-center justify-center gap-1 text-white hover:underline" href="https://www.linkedin.com/in/dinu-rodnitchi/"><StaticImage src="../images/social-linkedin.png" alt="Dinu Rodnitchi - LinkedIn" objectFit="cover" width="48" />LinkedIn</a></li>
                <li><a className="flex items-center justify-center gap-1 text-white hover:underline" href="https://www.drupal.org/u/dinu-r"><StaticImage src="../images/social-drupal.png" alt="Dinu Rodnitchi - durpal.org" objectFit="cover" width="48" />drupal.org</a></li>
              </ul>
            </div>
            <div className="sticky top-0 p-10">
              <div className="skills text-white">
                <div>
                  <p className="font-bold uppercase text-base">Skills And Technologies</p>
                  <div className="border-t-2 pt-2 mt-2">
                    <Skills skills={[
                      "Drupal",
                      "Node.js",
                      "React",
                      "Next.js",
                      "Gatsby",
                      "PHP",
                      "JavaScript",
                      "TypeScript",
                      "Search API",
                      "SOLR",
                      "Docker",
                      "Git",
                      "Acquia",
                      "Pantheon",
                      "Firebase",
                      "Google Cloud",
                      "AWS",
                      "Platform.sh",
                      "CI/CD"
                    ]} />
                  </div>
                </div>
                <div className='mt-10'>
                  <p className="font-bold uppercase text-base">Drupal Skills</p>
                  <div className="border-t-2 pt-2 mt-2">
                    <Skills skills={[
                      'Custom Modules',
                      'Drupal Core API',
                      'Drupal Security',
                      'REST',
                      'Web Services',
                      'Performance Optimization',
                      'Debugging',
                      'Content Management',
                      'Search API',
                      'SOLR',
                      'Elasticsearch',
                      'SEO',
                      'Accessibility',
                      'Coding Standards',
                      'ECommerce',
                      'Theming',
                      'JavaScript',
                      'SCSS',
                      'PostCSS'
                    ]} />
                  </div>
                </div>
                <div className='mt-10'>
                  <p className="font-bold uppercase text-base">Certifications</p>
                  <div className="border-t-2 pt-2 mt-2">
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/6UAMWLHPWZ4H" target="_blank" rel="noreferrer">IBM Data Science Professional Certificate (IBM)</a>
                  </div>
                </div>
                <div className='mt-10'>
                  <p className="font-bold uppercase text-base">Training / Courses</p>
                  <div className="border-t-2 pt-2 mt-2">
                    <Skills skills={['Machine Learning', 'Data Science', 'C/C++', 'Python']} />
                  </div>
                </div>
                <div className='mt-10'>
                  <p className="font-bold uppercase text-base">Education</p>
                  <div className="border-t-2 pt-2 mt-2">
                    <Education name="College of Informatics" degree="Software Engineer" date="01/2006 - 01/2010" location="Chisinau" />
                  </div>
                  <div className="border-t-1 pt-2 mt-2">
                    <Education name="Technical University of Moldova" degree="Software Engineer" date="01/2010 - 01/2015" location="Chisinau" />
                  </div>
                </div>
                <div className='mt-10'>
                  <p className="font-bold uppercase text-base">Languages</p>
                  <div className="border-t-2 pt-2 mt-2">
                    <Language name="English" level="Proficient" rate="4" />
                    <Language name="Romanian" level="Native" rate="5" />
                    <Language name="Russian" level="Proficient" rate="4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 text-black text-center p-5">
        <div class="flex justify-center items-center gap-2">
          <a href="https://github.com/dinu-dev/dinu-dev" className="hover:underline">Download this website</a>
          <a href="/dinu-cv.pdf" className="hover:underline">Download CV</a>
          <a href="https://www.linkedin.com/in/dinu-rodnitchi/" className="hover:underline">LinkedIn</a>
          <a href="https://www.drupal.org/u/dinu-r" className="hover:underline">drupal.org</a>
        </div>
        <div className="text-[##4f5252] text-xs flex items-center justify-center gap-3 mt-2 mb-2">
          <a href="tel:+37378582197" className="group flex items-center gap-1"><DevicePhoneMobileIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" />+373-78582197</a>
          <a href="mailto:rodnitchi@gmail.com" className="group flex items-center gap-1"><AtSymbolIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" /> <span>rodnitchi@gmail.com</span></a>
          <a href="/" className="group flex items-center gap-1"><LinkIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" />dinu.dev</a>
          <a target="_blank" rel="noreferrer" className="group flex items-center gap-1" href="https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u">
            <MapPinIcon className="h-5 w-5 text-gray-400 group-hover:text-[#1ab0b3]" /> <span>Chisinau, Moldova</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = ({ data }) => <>
  <title>{data.site.siteMetadata.title} - {data.site.siteMetadata.description}</title>
  <meta name="description" content={data.site.siteMetadata.description} />
  <meta name="image" content={data.site.siteMetadata.image} />
</>

export const query = graphql`
  query MyEmploymentHistory {
    allEmploymentHistory: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "employment"}}}
      sort: {frontmatter: {order: ASC}}
      ) {
      edges {
        node {
          frontmatter {
            title
            type
            date
            company
          }
          fileAbsolutePath
          html
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
	  }
  }
`
