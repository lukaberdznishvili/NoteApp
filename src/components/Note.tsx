import React from 'react';
import { Link } from 'react-router-dom';

const Note: React.FC = () => {
    return (
        <>
            <div>
                <h1>Notes</h1>
                <div>
                    <input type="text" className="w-1/2 h-12" />
                </div>
                <div>
                    <input type="text" className="w-1/2 h-10" />
                </div>
                <div>
                    <Link to="/create">
                        <button>Create</button>
                    </Link>
                </div>
                <div>
                    <Link to="/edit">
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Note;
