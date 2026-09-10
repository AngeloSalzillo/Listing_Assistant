import Button from './components/Button.jsx';
import Title from './components/Title.jsx'
import TagContainer from './components/TagContainer.jsx';
import PriceRange from './components/PriceRange.jsx';
import { useState } from 'react';

export default function App()  {

  const[description, setDescription] = useState('');
  const[listing, setListing] = useState({'title': null, 'tags': [], 'price_range': ''});
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      <h1 style = {{color: '#13C1AC'}}> Wallapop Listing Assistant </h1>
      <textarea  
        placeholder="Please enter a description..." 
        onChange={(e) => setDescription(e.target.value)}>
      </textarea>

      <Button description={description} setListing={setListing}/>

      <Title title={listing.title}/>

      <TagContainer tags={listing.tags}/>

      <PriceRange priceRange={listing.price_range}/>
    </div>
  );
}