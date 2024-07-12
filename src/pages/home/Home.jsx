import { Section, Article, Title, Paragraph } from "@/components";
import { ThemeContext } from "../../contexts/ThemeContexts/ThemeContext";
import { useContext } from "react";
const Home = ()=>{
  const { darkMode,swithDarkMode}=useContext(ThemeContext);

  return (
    <>
    <Section sectionTitle="mon application React">
      <Article><Title
      title="mon pereper article"
      level={5}
      />
        <Paragraph>
          {"\"appronfondir ces connainsces en React\""}{`"appronfondie ses connaoissanece React"`}
        </Paragraph>
      </Article>
      <button onClick={()=>{ swithDarkMode()}}>
        {darkMode?"☀️":"🌑" }
  
      </button>

    </Section>
    </>
  )
}
export default  Home;