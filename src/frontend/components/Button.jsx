export default function Button({description, setListing}) {

    async function handleClick() {

        console.log('Button clicked');

        // No description value (for example as the application start there is no description)
        if(description === null) {

            setListing({title: null, tags: [], price_range: ''});
            return;
        }

        // Empty description (for example if the user presses "Generate" without a description) 
        if(description === '') {

            setListing({title: '', tags: [], price_range: ''});
            return;
        }

        // Send the description to the backend
        const response = await fetch('http://localhost:3000/api/generate', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description : description })
        });

        const data = await response.json();

        // Handle errors returned by the backend
        if (!response.ok) {
            console.error(`Error ${response.status}: ${data.error}`);
            setListing({title: 'error', tags: [], price_range: ''});
            return;
        }

        // Validate that the AI response has the expected structure
        if (!data.title || !Array.isArray(data.tags) || !data.price_range) {

            console.error('Invalid listing response:', data);
            setListing({title: 'error', tags: [], price_range: ''});
            return;
        }

        // Update the listing with the generated data
        setListing({
            title: data.title,
            tags: data.tags,
            price_range: data.price_range
        });

        console.log('Listing updated:', data);
    }

    return (
        <button onClick={handleClick}>
            Generate
        </button>
    );
}