import './box.css'
export default function Users({user}){
   const {name,email} = user;
    return <>
     <div className="box">
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
     </div>
    </>
}