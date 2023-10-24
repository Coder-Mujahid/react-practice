export default function APIdata({single}) {

    const {name,username,email,phone}=single

    return (

    <div className="border-2 border-red-500 p-5 rounded-md ">
        <h2>name : {name} </h2>
        <h2>username : {email} </h2>
        <h2>email : {username} </h2>
        <h2>phone : {phone} </h2>
    </div>
  )
}
