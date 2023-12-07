export default function TabMenu({project_list,changeProject,openAddProject,opened_project}){
    const active_class = "bg-zinc-500"
    function drawProjectButton(project){
        let classname = "text-white px-7 my-5 "
        if(opened_project != undefined || opened_project != null){
            if(opened_project.name == project.name){
                classname = classname + "bg-zinc-700"
            }
        }
        
        return (
            <p className={classname}  key={project.key} onClick={()=>{changeProject(project)}}>{project.name}</p>
        )
    }
    return(
        <div className="w-1/5 h-screen bg-zinc-800 py-6  rounded-tr-lg">
            <h3 className=" font-semibold px-7 text-white text-lg pb-8">YOUR PROJECTS</h3>
            <button onClick={openAddProject} className="bg-zinc-700 px-3 py-2 text-zinc-400 rounded-lg hover:bg-zinc-500 mx-7" >+ Add Project</button>
            {project_list.map((project)=>(
                
                drawProjectButton(project)
            ))}
        </div>
    )
}