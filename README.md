# Wallapop Listing Assistant

This file will guide you in the setup process to run this web app on your computer

## Requirements

Before running the project, make sure the following are installed:

- Node.js (version 18 or)
- npm (included with Node.js)

You can verify the installations by running in the terminal:

node --version
npm --version

## Installation

After downloading the project, open a terminal in

- Listing_Assistant/

and execute

- npm install

to install the project dependencies in package.json and create the node_modules folder

## Environment variables

The project includes a .env file containing the environment variables:

- GROQ_API_KEY=xxxxx (it is obscured since it is a private datum)
- MOCK_MODE=true

In case you want to test the application in Mock Mode, you should leave MOCK_MODE = true (which is by default).
Otherwise, in case you wanted to test the real application with an actual AI Assistant:
 - MOCK_MODE=false
 - you should substitute the value of GROQ_API_KEY with a valid api key

## Run

The application consists of two parts:

- React/Vite frontend
- Node.js/Express backend

that need to run at the same time, so you need to:

- Open a terminal in the project root directory and run: node src/backend/server.js
- Open a second terminal in the project root directory and run: npm run dev

Vite will provide a local URL, normally http://localhost:5173, open it to see the interface working

## Use of the Application

As the application starts you will see a simple interface with a textfield and a button (Generate).
In order to use the application you have to type something inside the textfield and press the button,
this will produce (in case of valid response from the Mocked AI Assistant) a better listing description,
some tags and a price range.

NOTE: If you run the application in Mock Mode, the responses provided to the frontend will come from a list of
pre-saved responses in random order, contained in MockResponses.js

In order to test how the application behaves with different kind of responses, the following cases have been considered:

1) Valid Response (Mock Responses from 0 to 5)
    - The application will produce a listing title, tags and a price range

2) Bad Response (Mock Response from 6 to 10), which could be:
    - Broken .json response (Case 6)
    - Missing title, tag, or price range (Case 7-8)
    - Empty Response (Case 9)
    - Completely invalid response, not in json format or convertible (Case 10)


Other two more cases have been considered, this time regarding the description input by the user:

1) The user actually writes a description
    - The application will respond generating title, tags and price range, if the Mock AI Assistant yields a valid response, otherwise it will handle the bad response displaying an error message ("AI Assistant failed to generate a response")
2) The application starts, and the user hasn't put any description yet
    - The application will only display the textfield and the button, no title nor tags nor price range since they haven't been generated
3) The user doesn't insert any description, and they press the button "Generate"
    - An error message ("You need to type a description") will be displayed

## Time spent

I spent roughly 3-4 hours to have a first version of the web app working "fine", and about the same amount to refine it, test it, address unconsidered situations (the ones that took the most time).


