import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter title here"
        value={paste ? paste.title : ""}
        disabled
      />
      <textarea
        value={paste ? paste.content : ""}
        placeholder="Enter the content"
        disabled
        rows={20}
      />
      <button disabled>
        {paste ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>
  );
};

export default ViewPaste;