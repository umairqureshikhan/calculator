const Display =({displayvalue}:any)=>{
    return(
        <div>
              <input className="display" type="text" value={displayvalue} readOnly/>


        </div>
    )
}
export default Display;