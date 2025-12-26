# React + TypeScript Recipe Discovery App

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.To run this application you want to CD into recipe-discovery-app
and run npm run dev in the terminal this will provide a local host port which you can paste into a browser and see the application. I used react router and a few custom hooks. 


I was having an issue with context hook becuase of race conditions. I worked this out by having the context and the providers seperately.This clear up all the errors I was getting from race conditions. 

### The challenge

Users should be able to:

- See all recipe categories from the API on the homepage
- Search for a recipe using an `input` field
- Filter recipes by category 
- Click on a recipe to see more detailed information on a separate page
- Add and remove recipes from favorites
- Toggle the color scheme between light and dark mode


 [!screenshot of app](appSS.png?raw=true)