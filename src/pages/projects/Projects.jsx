import ProjectCard from '../../components/projectcard/ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <div className="projects">
    <ProjectCard title="Kapde wale" imgSrc="/pictures/kapde_Wale.png" link="https://kapde-wale.netlify.app/" skills={['react', 'mongo db', 'node','express','css','js']} />
    <ProjectCard title="Gossip chat" imgSrc="/pictures/gossip_chat.png" link="https://gossipchats.netlify.app/" skills={['react', 'firebase', 'node']} />
    <ProjectCard title="Yummy " imgSrc="/pictures/yummy.png" link="https://yummyfortummy.netlify.app/" skills={['react','node','express']} />
    <ProjectCard title="Medi-buddy " imgSrc="/pictures/medibuddy.png" link="https://github.com/Adi-3000/medibuddy" skills={['HTML', 'CSS', 'JS','sql','php']} />
    <ProjectCard  title="product page" imgSrc="/pictures/product.png" link="https://adi-3000.github.io/demo-product-landing-page/" skills={['HTML', 'CSS', 'JS']} />
    <ProjectCard  title="Tribute page" imgSrc="/pictures/tribute.png" link="https://adi-3000.github.io/responsive-tribute-page/" skills={['HTML', 'CSS']} />
    <ProjectCard title="calculator " imgSrc="/pictures/calci.png" link="https://adi-3000.github.io/js-calculator/" skills={['HTML', 'CSS', 'JS']} />
    <ProjectCard  title="quizie" imgSrc="/pictures/quiz.png" link="https://adi-3000.github.io/js_quiz/" skills={['HTML', 'CSS', 'JS']} />
  </div>
  )
}

export default Projects