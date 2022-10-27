import React, { useState } from 'react'
import { useAddCategoriesData, useCategoriesData } from '../../hooks/useCategories'
import ReactModal from 'react-modal'
import './questionCategory.css'

const QuestionCategory = () => {
    const [category, setCategory] = useState('');
    const [onEditModal, setOnEditModal] = useState(false);
    const [onDeleteModal, setOnDeleteModal] = useState(false);

    const { isLoading, data } = useCategoriesData()
    const { mutate: addCategory } = useAddCategoriesData()

    const openEditModal = () => {
        setOnEditModal(true)
    }

    const closeEditModal = () => {
        setOnEditModal(false)
    }

    const openDeleteModal = () => {
        setOnDeleteModal(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addCategory({ description: category })

        e.target.reset()
    }

    const handleEdit = (e, id) => {
        e.preventDefault()
        console.log(id)
    }

    if (isLoading) {
        return <h4 className='loading'>Loading...</h4>
    }

    return (
        <main className="question-category">
            <div className="question-category--container">
                <div className="add-category">
                    <h4>Add New Category</h4>
                    <form className='addCatergory-form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)} className='question-category--input' />
                        <button type='submit' disabled={!category} className='question-category--btn'>Save</button>
                    </form>
                </div>
                <div className="category-list">
                    <h4>Category List</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.data.map(({ id, description }) => {
                                return (
                                    <tr key={id}>
                                        <th>{description}</th>
                                        <td>
                                            <div className='btn-container'>
                                                <button onClick={openEditModal}>
                                                    <ion-icon name="create-outline" class="action-icon edit"></ion-icon>
                                                </button>
                                                <button>
                                                    <ion-icon name="trash-outline" class="action-icon trash"></ion-icon>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            < ReactModal
                isOpen={onEditModal}
                onRequestClose={closeEditModal}
                contentLabel="Edit Category"
                ariaHideApp={false}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal-header">
                    <h2>Edit Category</h2>
                    <span onClick={closeEditModal}>x</span>
                </div>
                <input type="text" className='modal-input' />
                <div className="modal-button">
                    <button className='modal-update-btn'>Update</button>
                    <button className='modal-cancel-btn'>Cancel</button>
                </div>
            </ReactModal>
        </main >
    )
}

export default QuestionCategory