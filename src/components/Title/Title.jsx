
const Title = ({title, level, addStyle})=>{

    const levelTitle=(level)=>{
        switch(level){
            case'h1':
            case 1:
                return (<h1 style={addStyle}> {title} </h1>);

            case'h2':
            case 2 :
                return (<h2 style={addStyle}> {title} </h2>);

            case'h3':
            case 3:
                return (<h3 style={addStyle}> {title} </h3>);

            case'h4':
            case 4 :
                return (<h4 style={addStyle}> {title} </h4>);

            case'h5':
            case 5:
                return (<h5 style={addStyle}> {title} </h5>);
                    
            case'h6':
            case 6 :
                return (<h6 style={addStyle}> {title} </h6>);

                
            default:
                return null;
        }
    }
    
    return(
        <>
            {levelTitle(level)??(<h1>e</h1>)}
        </>
    );
}
export default Title;