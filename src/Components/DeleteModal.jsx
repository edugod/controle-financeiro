const DeleteModal = ({ onConfirm, onCancel }) => {
	return (
		<div className='modal p-4 bg-white rounded-lg shadow-md'>
				<button
					className='mr-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 focus:outline-none focus:bg-red-600'
					onClick={onConfirm}
				>
					Sim
				</button>
				<button
					className='px-4 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 focus:outline-none focus:bg-gray-400'
					onClick={onCancel}
				>
					Cancelar
				</button>
		</div>
	)
}

export default DeleteModal
