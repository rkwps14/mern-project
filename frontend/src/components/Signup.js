import { useState } from "react"

function Signup(){
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    
    function signupForm(){
        console.log(name)
        console.log(email)
        console.log(password)
    }

    return (
    <div className="register">
        <h1>Register</h1>
        <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input className="inputBox" type="text" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button className="btn-signup" type="button" onClick={signupForm}>Sign up</button>
    </div>
    )
}

export default Signup