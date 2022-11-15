import React, {useState} from 'react'
import ReactModal from 'react-modal';
import './candidate.css'

const Candidates = () => {
    const [onDeleteModal, setOnDeleteModal] = useState(false);

    const openDeleteModal = () => setOnDeleteModal(true)
    const closeDeleteModal = () => setOnDeleteModal(false)

    return (
        <main className='candidate'>
            <h4>Candidates</h4>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr >
                            <td>1</td>
                            <td>Prime</td>
                            <td>Prime@gmail.com</td>
                            <td>User</td>
                            <td>
                                <div className='btn-container'>
                                    {/* <button>
                                        <Link to={`/question-category/edit/${cat.id}`}> */}
                                            <ion-icon name="create-outline" class="action-icon edit"></ion-icon>
                                        {/* </Link>
                                    </button> */}
                                    <button onClick={() => {
                                        openDeleteModal();
                                        // setId(cat.id);
                                    }}>
                                        <ion-icon name="trash-outline" class="action-icon trash"></ion-icon>
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>

            {/* Delete category modal */}
            < ReactModal
                isOpen={onDeleteModal}
                onRequestClose={closeDeleteModal}
                contentLabel="Delete Candidate"
                ariaHideApp={false}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal-header">
                    <h2>Delete Candidate</h2>
                    <span onClick={closeDeleteModal}>x</span>
                </div>
                <span className='msg'>Are you sure you want to delete this candidate?</span>
                <div className="modal-button">
                    <button className='modal-update-btn' >Confirm</button>
                    <button className='modal-cancel-btn' onClick={closeDeleteModal}>Cancel</button>
                </div>
            </ReactModal>
        </main>
    )
}

export default Candidates