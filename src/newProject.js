//Factory function that creates blank project array list
const newProjectLoad=()=>{
    console.log("create blank project via array list");
    let projectArray=[];
    console.log("push title to array...");
    let projectTitle="Default Project";
    projectArray.push({projectTitle});
    console.log(projectArray);

    return {projectArray, projectTitle}
}

export default newProjectLoad;