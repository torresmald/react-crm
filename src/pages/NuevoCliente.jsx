import { useNavigate, Form, useActionData } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
export async function action ({request}){
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos Obligatorios')
    }
    if(Object.keys(errores).length){
        return errores
    }

    return { ok: true };
}

function NuevoCliente() {
    const navigate = useNavigate();
    const errores = useActionData();
    console.log(errores);
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los Campos para registrar un nuevo cliente</p>
            <div className="flex justify-end ">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase" onClick={() => navigate('/')}>
                    Volver
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 px-5 py-10 mx-auto'>
                {errores && errores.map((error, index) => <Error key={index}>{error}</Error>)}
                <Form
                    method='POST'   
                >
                    <Formulario />
                    <input type="submit" className='mt-5 w-full bg-blue-800 p-3 text-white text-xl uppercase' value='Registrar Cliente' />
                </Form>
            </div>
        </>
    );
}

export default NuevoCliente;