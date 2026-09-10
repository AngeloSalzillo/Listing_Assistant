export default function Title({title}) {

   
    //no description yet
    if(title===null)
        return null;

    //empty description
    if(title === ''){

        return (
            
            <div className = "empty-description">
                <h3> You need to type a description </h3>
            </div>
        )
    };


    //AI gives a bad response
    if(title === 'error') {
        
        return (
            
            <div className = "error">
                <h3> AI Assistant couldn't generate a response, please try again</h3>
            </div>
        )
    };

    return (

        <div className = "title">
            <h2>{title}</h2>
        </div>
    )
}