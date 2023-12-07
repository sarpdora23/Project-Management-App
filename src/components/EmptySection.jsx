import no_image_logo from '../assets/no-projects.png'
export default function EmptySection({openAddProject}){
    return(
        <div className="w-4/5 flex justify-center items-center">
            <div>
                <div className='w-full flex justify-center'>
                    <img className='w-16' src={no_image_logo}></img>
                </div>
            
                <h3 className='flex justify-center text-lg text-stone-700 font-bold'>No Project Selected</h3>
                <p className='flex justify-center my-7 text-stone-500'>Select a project or get started with a new one.</p>
                <div className='w-full flex justify-center'>
                    <button className="rounded-md text-zinc-400 bg-zinc-800 px-4 py-2 hover:bg-zinc-700" onClick={openAddProject}>Create Project</button>
                </div>
            </div>
        </div>
    )
}