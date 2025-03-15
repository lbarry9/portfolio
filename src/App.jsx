import { useState } from 'react'

function Home() {
  const [] = useState(0)
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a project',
      link: 'https://42.fr'
    },
    {
      name: 'Project 2',
      description: 'This is another project',
      link: 'https://afafp.fr'
    },
    {
      name: 'Project 3',
      description: 'This is a third project',
      link: 'https://devolution-web.fr'
    },
  ]

  return (
    <>
     <h1 className="text-2xl text-orange-700">Portfolio</h1>
     {/* menu(nav) img? */}
     <main>
      <section>
        <h2>About Me</h2>
      </section>
      <section>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Visit</a>
          </div>
        ))}
      </section>
      <section>
        <h2>Contact</h2>
      </section>
     </main>
    </>
  )
}

export default Home
