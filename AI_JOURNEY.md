## AI assistant used

Mainly ChatGPT for doubts regarding the structure of the app, and Copilot for more technical questions

## What would I add with more time

For sure I would put some .css to make the app look more attractive and engaging.
For example 
- Animate the UI elements when hovering on them
- Adding a spinning wheel or loading bar when the real AI assistant is active (since it takes some time to answer),
  this way the user wouldn't feel like the app is not responding for a some seconds.

Also i could differentiate the errors given by the AI assistant depending on the type, insead of giving just a generic "AI Assistant couldn't generate a response, please try again".

## What is not clear

A thing that confuses me is how the Mock AI assistant should pretend to be an actual AI assistant. In my interpretation it has a set of saved responses (bad and correct) that appear on the screen with a random order, and the frontend updates consequently.

But for example, the AI Assistant handles the case of a nonsense word pretty good (father, hola, jupiter, or something like "xwiufhdfeewdasg") by throwing an error, how should the Mock Assistant handle this case?

## AI prompting

I found the AI really good for solving small problems (for example string to json, or explaining some error that I was not understanding properly), and also giving its best when giving prompts with more and more details.
For example the prompt:
"Considering this description for a Wallapop article:   
            "${description}".  
            Generate:  
            1- A better listing title  
            2- 3-5 tags    
            3- a price range"  

was giving me unformatted responses, always different and less predictable compared to the prompt I actually used in the code