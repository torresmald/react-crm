import { Form, redirect, useNavigate } from "react-router-dom";
import { deleteCliente } from "../api/api";

export async function action({ params }) {
    deleteCliente(params.id)
    return redirect('/')

}

function Cliente({ cliente }) {

    const navigate = useNavigate();
    const { nombre, empresa, email, telefono, id } = cliente

    return (
        <tr className="border-b ">
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800">
                    {nombre}
                </p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button type="button" className="text-blue-600 uppercase font-bold hover:text-blue-700 text-xs" onClick={() => navigate(`/clientes/${id}/editar`)}>
                    Editar
                </button>
                <Form
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(event) => {
                        if (!confirm('Estás seguro que deseas eliminar?')) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit" className="text-red-600 uppercase font-bold hover:text-red-700 text-xs" >
                        Eliminar
                    </button>
                </Form>

            </td>
        </tr>
    );
}

export default Cliente;