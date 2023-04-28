import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiJava,
  DiPython,
  DiAndroid
} from "react-icons/di";

import "../styles/components/tecnologiesconteiner.sass";

const technologies = [
  { id: "html",text:"Intermediário",name: "HTML5", icon: <DiHtml5 /> },
  { id: "css",text:"Básico - Intermediário",name: "CSS3", icon: <DiCss3 /> },
  { id: "js",text:"Intermediário",name: "JavaScript", icon: <DiJsBadge /> },
  { id: "mysql",text:"Básico - Intermediário", name: "MySQL", icon: <DiMysql /> },
  { id: "react",text:"Básico - Intermediário", name: "React", icon: <DiReact /> },
  { id: "java",text:"Intermediário",name: "Java", icon: <DiJava /> },
  { id: "python",text:"Básico - Intermediário", name: "Python", icon: <DiPython /> },
  { id: "andoid",text:"Básico", name: "Android", icon: <DiAndroid /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;