import SkillsResumen from "./SkillsResumen"
import SkillsVarias from "./SkillsVarias"

const Skills = () => {
  return (
    <div id="habilidades" className="fondo3 flex-1 py-10 items-center  w-screen md:flex md:flex-col md:pt-20 md:min-h-screen   lg:justify-between lg:flex-row  lg:px-28 border-b-2 border-teal-500">
        <SkillsResumen />
        <SkillsVarias />
    </div>
  )
}

export default Skills