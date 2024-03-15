import React, { useCallback } from 'react';

const DespesaItem = ({ despesa, onDelete }) => {
    const handleDelete = useCallback(() => {
        onDelete(despesa.id);
    }, [despesa.id, onDelete]);

    return (
        <li className="flex items-center justify-between py-px border-b">
            <div>
                <span className="font-bold"></span> {despesa.dia} | 
                <span className="font-bold ml-2"></span> R$ {despesa.valor.toFixed(2)} | 
                <span className="font-bold ml-2"></span> {despesa.observacao} | 
                <span className="font-bold ml-2"></span> {despesa.categoria}
            </div>
            <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-px px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Deletar
            </button>
        </li>
    );
};

export default DespesaItem;
