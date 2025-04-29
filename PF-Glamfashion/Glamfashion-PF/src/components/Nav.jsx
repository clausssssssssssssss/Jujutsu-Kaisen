import React from "react";

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/Menu" className="hover:text-gray-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/CategoriasInicio" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Inicio de sesion" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Iniciar Sesion" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Crear cuenta" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Perfil" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Editar Perfil" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Inicio" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Productos" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Carrito de compras" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Metodo de pago" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Terminos y Condiciones" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/Quienes Somos" className="hover:text-gray-200">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;