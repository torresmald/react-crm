import {useLoaderData} from 'react-router-dom';
import Cliente from '../components/Cliente';
import {getClientes} from '../api/api.jsx';

export function loader(){
    const clientes = getClientes();
    return clientes;
}
function Index() {
    const clientes = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>
            {clientes.length ? (
                <table className='w-full bg-white shadow mt-5 table-auto'>
                    <thead className='bg-blue-800 text-white '>
                    <tr>
                        <th>
                            Cliente
                        </th>
                        <th>
                            Contacto
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                        {clientes.map((cliente) => (
                           <Cliente key={cliente.id} cliente={cliente}/>
                        )
                        )}
                    </tbody>
                </table>
            ) : (<p>Aún no hay clientes</p>)}
        </>
    );
}

export default Index;