// Interface for the programmer's skills object
interface ProgrammerSkills  {

    coodingLanguages: string[];
    tools: string[];
    frameworks: string[];
    
}
// Nested object representing programmer's skills
let programmerSkills: ProgrammerSkills = {

    coodingLanguages:['JavaScript','Python','c++'],
    tools:['Vissual Studio Code','Git','Dooker'],
    frameworks:['React','Node.js','spring boot']

};
let { coodingLanguages,tools,frameworks } = programmerSkills;

// Displaying three specific skills
console.log('Cooding Language', coodingLanguages);
console.log('Tools', tools);
console.log("FrameWorks", frameworks);