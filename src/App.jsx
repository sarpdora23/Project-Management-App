import { useRef, useState } from "react";
import ProjectSection from "./components/ProjectSection";
import TabMenu from "./components/TabMenu";
import AddProjectSection from "./components/AddProjectSection";
import EmptySection from "./components/EmptySection";

function App() {
  const [project_list,set_project_list] = useState([])
  const [opened_project,set_opened_project] = useState(null)
  const ref = useRef()

  function changeProject(project){
    set_opened_project(project)
  }
  function updateProject(oldone,newProject){
    const project_list_copy = [...project_list]
    let pi = 0
    for(let i=0;i<project_list_copy.length;i++){
      if(project_list_copy[i].key == newProject.key){
          pi = i
          break
      }
    }
    project_list_copy[pi] = newProject
    console.log(project_list_copy)
    set_project_list(project_list_copy)
    changeProject(newProject)
  }
  function addProject(new_project){
    const project_list_copy = [...project_list]
    project_list_copy.push(new_project)
    set_project_list(project_list_copy)
    
  }
  function deleteProject(){
    const project_list_copy = []
    for (let i = 0; i < project_list.length; i++) {
      if(opened_project.key != project_list[i].key){
        project_list_copy.push(opened_project[i])
      }
    }
    set_project_list(project_list_copy)
    changeProject(null)
  }
  function openAddProject(){
    ref.current.showModal()
  }

  return (
      <div className="pt-10 w-screen flex">
      <AddProjectSection addProject={addProject} ref={ref}/>
      <TabMenu openAddProject={openAddProject} changeProject={changeProject} project_list={project_list} opened_project={opened_project}/>
      {opened_project == null ? <EmptySection openAddProject={openAddProject}/> : <ProjectSection opened_project={opened_project} deleteProject={deleteProject} updateProject={updateProject}/>}  
      </div>
  );
}

export default App;
