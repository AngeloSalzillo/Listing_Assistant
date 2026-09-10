export default function TagContainer({tags}) {

    if(!tags)
        return null;

    return (

        <div className = "tag-container" style={{ display: 'flex', gap: '10px'}}>
            
            {tags.map( tag => {

                return (
                    <div className = "tag" style={{background: '#13C1AC', borderRadius: '20%'}}>
                        <span>{tag}</span>
                    </div>
                )
            })}

        </div>
    )
}