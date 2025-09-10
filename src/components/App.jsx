import LastPosts from './LastPosts.jsx'
import AboutMe from'./AboutMe.jsx'
import Projects from './Projects.jsx'
import FindMe from './FindMe.jsx'
import '../resources/App.css'

export default function App() {
  return <>
    <h1>Ryoza</h1>

    <AboutMe/>
    <Projects/>
    <LastPosts/>
    <hr />
    <FindMe/>
  </>
}
