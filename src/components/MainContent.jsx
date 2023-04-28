import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesConteiner from './TecnologiesConteiner'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TecnologiesConteiner/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent