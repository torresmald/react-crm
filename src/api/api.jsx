export async function getClientes (){
    const respuesta = await fetch('http://localhost:3000/clientes');
    const resultado = await respuesta.json();
    return resultado;
}
export async function getCliente (id){
    const respuesta = await fetch(`http://localhost:3000/clientes/${id}`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function postClientes (datos){
    try {
        const respuesta = await fetch('http://localhost:3000/clientes', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resultado = await respuesta.json()
    } catch (error) {
        console.log(error)
    }
   
}

export async function editCliente(id, datos){
    try {
        const respuesta = await fetch(`http://localhost:3000/clientes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resultado = await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
export async function deleteCliente(id){
    try {
        const respuesta = await fetch(`http://localhost:3000/clientes/${id}`, {
            method: 'DELETE',
        });
        const resultado = await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}