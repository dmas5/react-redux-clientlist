import { addClient, removeClient, saveClient } from "../reducers/clientReducer";
import { useDispatch, useSelector } from "react-redux";
import { generateNumber } from "../services/generateNumber";
import { useState } from "react";

const ClientList = () => {
    
    const dispatch = useDispatch();
    const clientList = useSelector(state => state);
    const [editedClient,setEditedClient] = useState({id:'',name:'',age:''})


    const handleAddClient = (event) => {

        event.preventDefault();

        const newClient = {
            id: generateNumber(),
            name: event.target.clientName.value,
            age: event.target.clientAge.value
        }

        dispatch(addClient(newClient));

        event.target.clientName.value = '';
        event.target.clientAge.value = '';
    }

    const handleRemoveClient = (id) => {
        dispatch(removeClient({id}))
    }


    const handleEditedClient = (event) => {
        setEditedClient({...editedClient, [event.target.name]:event.target.value})
    }
    const editClient = (id) => {
        let clientObject = clientList.find(c => c.id === id)
        setEditedClient(clientObject)
    }
    const saveEditedClient = () => {
        dispatch(saveClient(editedClient))
    }






    return (
        <div>
            <h4>Add new client</h4>
            <form onSubmit={handleAddClient}>
                <label>Name:</label>
                <input name='clientName' />
                <label>Age:</label>
                <input name='clientAge' />
                <button type='submit'>add</button>
            </form>
            <div>
                <h4>Edit client:</h4>
            <label>Name:</label>
            <input value={editedClient.name} name="name" onChange={handleEditedClient} />
            <label>Age:</label>
            <input value={editedClient.age} name="age" onChange={handleEditedClient} />
            <button onClick={saveEditedClient}>save</button>
            
        </div>
            
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientList.map((c) =>
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.age}</td>
                                <td><button onClick={() => handleRemoveClient(c.id)}>remove</button></td>
                                <td><button onClick={() => editClient(c.id)}>edit</button></td>
                            </tr>)
                    }
                </tbody>
            </table>


        </div>
    )
}

export default ClientList;