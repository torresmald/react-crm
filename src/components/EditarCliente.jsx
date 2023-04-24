import { getCliente, editCliente } from "../api/api";
import Error from "./Error";
import Formulario from "./Formulario";
import { Form , useNavigate, useLoaderData, redirect, useActionData} from "react-router-dom";
export async function loader({params}){
    const cliente = await getCliente(params.id);
    if (Object.values(cliente).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    return cliente;
}

export async function action({request, params}){
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    const email = formData.get('email');

    if(Object.values(datos).includes('')){
        errores.push('Todos los campos Obligatorios')
    }
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)){
        errores.push('El email no es válido')
    }
    if(Object.keys(errores).length){
        return errores
    }
    await editCliente(params.id, datos);
    return redirect('/');
}
function EditarCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errores = useActionData();
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Puedes modificar los datos de un cliente</p>
            <div className="flex justify-end ">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase" onClick={() => navigate('/')}>
                    Volver
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 px-5 py-10 mx-auto'>
                {errores && errores.map((error, index) => <Error key={index}>{error}</Error>)}
                <Form
                    method='POST' 
                    noValidate  
                    
                >
                    <Formulario cliente={cliente}/>
                    <input type="submit" className='mt-5 w-full bg-blue-800 p-3 text-white text-xl uppercase' value='Registrar Cliente' />
                </Form>
            </div>
        </>
    );
}

export default EditarCliente;