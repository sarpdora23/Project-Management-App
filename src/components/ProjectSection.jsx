import { useRef } from "react"
import ProjectTask from "./ProjectTask"

export default function ProjectSection({opened_project,updateProject,deleteProject}){
    const ref = useRef()
    const project_tasks = opened_project.tasks
    function updateTasks(new_tasks){
        const project_copy = {...opened_project}
        project_copy.tasks = new_tasks
        updateProject(opened_project,project_copy)
    }
    return(
        <div className="h-screen pl-12 pr-20 w-4/5 py-8">
            <div className="flex w-full items-stretch items-end place-content-between text-zinc-600">
                <div className="w-full">
                    <h2 className="text-4xl  font-bold">{opened_project.name}</h2>
                    <p className="my-4 text-lg text-neutral-400">{opened_project.date}</p>
                    <p className="font-normal mb-5">{opened_project.desc}</p>
                    <hr className="w-full border-zinc-300"></hr>
                    <h3 className="my-3 font-bold text-2xl">Tasks</h3>
                    <div className="flex items-center">
                        <input className="px-2 rounded h-8 w-60 bg-zinc-300 mr-4" ref={ref}></input>
                        <p className="font-semibold" onClick={()=>{
                            const task_text = ref.current.value
                            project_tasks.push(task_text)
                            ref.current.value = ""
                            updateTasks(project_tasks)
                        }}>Add Task</p>
                        
                    </div>
                    {project_tasks.length == 0 && (<p className="mt-2 text-stone-900 font-medium">This project does not have any tasks yet.</p>)}
                    <ProjectTask tasks={project_tasks} updateTasks={updateTasks}/>
                </div>
                <p onClick={deleteProject} className="text-md font-semibold">Delete</p>
            </div>
        </div>
    )
}