import React, { useCallback } from 'react';

const DespesaItem = ({ despesa, onDelete }) => {
    const handleDelete = useCallback(() => {
        onDelete(despesa.id);
    }, [despesa.id, onDelete]);

    const { dia: data, valor, observacao, categoria } = despesa;

    const [dia, mes, ano] = data.split('/')

    return (
        <li onClick={handleDelete} className='flex items-center justify-between py-2 border-b-2 border-primary cursor-pointer'>
            <div>
                <span className='font-bold ml-2'></span> R$ {valor.toFixed(2)} |
                 {' '}{dia}/{mes} |
                <span className='font-bold ml-2'>Motivo:</span> {observacao} |
                <span className='font-bold ml-2'>Categoria:</span> {categoria}
            </div>
        </li>
    );
};

export default DespesaItem;
