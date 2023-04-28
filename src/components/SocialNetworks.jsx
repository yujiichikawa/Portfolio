import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  {name:"linkedin",link:"https://www.linkedin.com/in/thiago-ichikawa-0bba07205/",icon:<FaLinkedinIn/>},
  {name:"github",link:"https://github.com/yujiichikawa",icon:<FaGithub/>},
  {name:"instagram",link:"https://www.instagram.com/tyujigi/",icon:<FaInstagram/>},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network)=>(
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks