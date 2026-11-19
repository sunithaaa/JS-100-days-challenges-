// Challenge 13 — URL slug generator

// Scenario: You're developing a CMS (Content Management System). 
// Whenever an administrator creates a blog article, the application automatically 
// generates a URL-friendly slug from its title.
// For example:
// My First JavaScript Tutorial

// becomes:
// my-first-javascript-tutorial

const articleTitles = [
  "My First JavaScript Tutorial",
  "  React Hooks Explained  ",
  "Node.js Backend Development",
  "Learn JavaScript in 2026!",
   "React    Hooks     Explained"
];

function generateSlug (articleTitles){
    const convertArraytoString = articleTitles
    .map(
        (title)=>{
        return title.toLowerCase().trim().replaceAll(/\s+/g,"-").replaceAll("!", "");
         }
    )
    return convertArraytoString
}
console.log(generateSlug(articleTitles))
