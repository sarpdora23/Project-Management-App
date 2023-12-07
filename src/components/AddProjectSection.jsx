import { forwardRef, useRef } from "react"

let AddProjectSection= forwardRef(function AddProjectSection({addProject},ref){
    const name_ref = useRef()
    const desc_ref = useRef()
    const date_ref = useRef()

    return(
        <dialog ref={ref} className="bg-zinch-500 w-2/5 h-96 rounded">
            <form className="w-full place-items-end" method="dialog">
                <div className="w-full flex justify-end">
                    <button>Cancel</button>
                    <button className="bg-zinc-800 text-zinc-300 rounded-md px-5 py-1 mx-3 my-3 hover:bg-zinc-700" onClick={()=>{
                    const new_project = {
                        "name":name_ref.current.value,
                        "desc":desc_ref.current.value,
                        "date":date_ref.current.value,
                        "tasks":[],
                        "key":name_ref.current.value + desc_ref.current.value
                    }
                    addProject(new_project)
                    name_ref.current.value = ""
                    desc_ref.current.value = ""
                    ref.current.close()
                    }}>Save</button>
                </div>
            </form>
            <div className="px-6">
                <div>
                    <p className="text-stone-800 font-semibold">TITLE</p>
                    <input className="bg-neutral-300 px-2 w-full rounded h-8" type="text" ref={name_ref}></input>
                </div>
                <div className="my-6">
                    <p className="font-semibold">DESCRIPTION</p>
                    <textarea className="bg-neutral-300 py-2 px-2 w-full rounded h-14" type="text" ref={desc_ref}></textarea>
                </div>
                <div>
                    <p className="font-semibold">DUE DATE</p>
                    <input className="bg-neutral-300 px-2 w-full rounded h-8" type="date" ref={date_ref}></input>
                </div>
            </div>
        </dialog>        
    )
})
export default AddProjectSection