import CardFlip from "./CardFlip"

const ProjectsContainer = () => {
  return (
    <section className='projects-container'>
      <h2>Projetos</h2>
      <CardFlip />      
      <a href="https://github.com/yujiichikawa" className='btn'>
        Ver GitHub
      </a>
    </section>
  )
}

export default ProjectsContainer