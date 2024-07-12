import { Title, Paragraph } from "@/components"
import { Await } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
function NotFound() {
  const error = useRouteError();
  
   let o = error.apt
  return (
    <div>
        <Title
        title="Errorur 404"
        level={2}
        />
        <Paragraph>
            La Ressource demandé est introuvable..
        </Paragraph>
        <Await/> {console.log(error)}
          { error?.message && (
             <Paragraph>
                <small>{`ERREUR : ${error}`}</small>
              </Paragraph>
          )}

          <Link to={"/"}>
          Retourner vers la pages d{"\'"}accueil</Link>
       
    </div>
  )
}

export default NotFound