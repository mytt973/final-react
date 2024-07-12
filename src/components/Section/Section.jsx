import Title from "../Title/Title";


const Section = ({sectionTitle, children})=>{
    return (
      <section>
        {sectionTitle!=="" && <Title
        title={sectionTitle}
        level={2}
        />}
        {children}
      
      </section>
    )
  }
  export default  Section;