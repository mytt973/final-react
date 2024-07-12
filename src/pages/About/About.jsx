import {Section, Article, Title, Paragraph} from "@/components"
export default function About() {
  return (
    <>
        <Section sectionTitle="à propot de l'application">
            <Article>
                <Title 
                title="Développeur de l'application"
                level="h3"/>
                <Paragraph>
                    Nom du dev: ekjzpfjz
                </Paragraph>
                <Paragraph>
                Pour nous assurer que le routage de notre application soit disponible partout,
                 on placera le createBrowserRouter et le RouterProvider 
                 dans le fichier "main.jsx", qui se situe à la racine du dossier "src".
                </Paragraph>
            </Article>
            <Article>
                <Title
                title="tecno utiliser "
                level="h4"/>
                <Paragraph>
                Pour nous assure qui se situe à la racine du dossier "src".
                </Paragraph>
                <Paragraph>
                Pour nous assure qui se situe à la racine du dossier "src".
                </Paragraph>
                <Paragraph>
                Pour nous assure qui se situe à la racine du dossier "src".
                </Paragraph>
            </Article>
        </Section>

    </>
  )
}
