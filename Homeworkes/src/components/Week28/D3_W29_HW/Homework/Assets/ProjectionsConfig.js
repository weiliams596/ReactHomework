export async function InsertNewProjection(ProjectionName,ProjectionLang,ProjectionCoDeveloper){
    try{
        const newProjection={"ProjectName":ProjectionName,"ProjectLanguage":ProjectionLang,"CoDeveloper":ProjectionCoDeveloper};
        // fetch Post request to insert new projection data
        const response = await fetch("http://localhost:5000/api/projections",{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(newProjection)});
        if(response.ok){
            return newProjection;
        }
        else{
            throw new Error("Failed to insert new projection");
        }
    }
    catch(error){
        console.log(error);
    }
}