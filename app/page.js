import Home from "../component/home"
import Skill from "../component/skill"
import About from "../component/about"
import Projects from "@/component/projek"
import Certifications from "@/component/sertifikat"

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Skill />
      <Projects />
      <Certifications />
    </main>
  )
}