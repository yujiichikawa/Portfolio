import Avatar from '../img/foto.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Thiago Ichikawa" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="#" className="btn">Download currículo</a>
  </aside>
}

export default Sidebar