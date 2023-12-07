import { useState } from "react"

export default function ProjectTask({tasks,updateTasks}){
    const a = []
    let counter = 0
    function delete_task(old_task){
        const tasks_copy = []
        tasks.forEach((task) => {
            if(old_task != task){
                tasks_copy.push(task)
            }
        })
        
        updateTasks(tasks_copy)
    }
    function DrawTask({task}){
        counter = counter + 1
        return(
            <>
            <p>{task}</p>
            <p onClick={()=>{
                delete_task(task)
            }}>Clear</p>
            </>
        )
    }
    return(
        <div className="">
            {tasks.length != 0 && tasks.map((task)=>(
                <div key={task + counter.toString()} className="flex rounded-md px-4 my-5 bg-neutral-300 py-5 w-full justify-between">
                    <DrawTask task={task}/>
                </div>
            ))}
            
        </div>
    )
}