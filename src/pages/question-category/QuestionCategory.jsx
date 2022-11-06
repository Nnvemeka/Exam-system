import React, { useState } from 'react'
import { useAddCategoriesData, useCategoriesData, useDeleteCategoryData } from '../../hooks/useCategories'
import ReactModal from 'react-modal'
import { Link, useNavigate } from 'react-router-dom'
import './questionCategory.css'

const QuestionCategory = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const [onDeleteModal, setOnDeleteModal] = useState(false);

    const { isLoading, data } = useCategoriesData()
    const { mutate: addCategory } = useAddCategoriesData()
    const { mutate: delCategory } = useDeleteCategoryData()

    const openDeleteModal = () => setOnDeleteModal(true)
    const closeDeleteModal = () => setOnDeleteModal(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        addCategory({ description: category })

        e.target.reset()
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
                    <div className="category-list--header">
                        <h5 className="category-list--title">Category List</h5>
                        <button onClick={() => navigate(-1)} className='go-back-btn'>&larr; Go back</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.data.map((cat) => {
                                return (
                                    <>
                                        <tr key={cat.id}>
                                            <th>{cat.description}</th>
                                            <td>
                                                <div className='btn-container'>
                                                    <button>
                                                        <Link to={`/question-category/edit/${cat.id}`}>
                                                            <ion-icon name="create-outline" class="action-icon edit"></ion-icon>
                                                        </Link>
                                                    </button>
                                                    <button onClick={() => {
                                                        openDeleteModal();
                                                        setId(cat.id);
                                                    }}>
                                                        <ion-icon name="trash-outline" class="action-icon trash"></ion-icon>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete category modal */}
            < ReactModal
                isOpen={onDeleteModal}
                onRequestClose={closeDeleteModal}
                contentLabel="Edit Category"
                ariaHideApp={false}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal-header">
                    <h2>Delete Category</h2>
                    <span onClick={closeDeleteModal}>x</span>
                </div>
                <span className='msg'>Are you sure you want to delete this category?</span>
                <div className="modal-button">
                    <button className='modal-update-btn' onClick={() => { delCategory(id); closeDeleteModal() }}>Confirm</button>
                    <button className='modal-cancel-btn' onClick={closeDeleteModal}>Cancel</button>
                </div>
            </ReactModal>
        </main >
    )
}

export default QuestionCategory