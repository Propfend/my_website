import LastPosts from './LastPosts.jsx'
import AboutMe from'./AboutMe.jsx'
import Projects from './Projects.jsx'
import FindMe from './FindMe.jsx'

export default function Home() {
  return <div>
    <AboutMe/>
    <Projects/>
    <LastPosts/>
    <hr />
    <FindMe/>
  </div>
}