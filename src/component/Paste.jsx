import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/PasteSlice";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  return (
    <div className="container">
      <input
        type="search"
        placeholder="Search your content"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filterData.map((paste) => (
        <div key={paste._id} className="paste-item">
          <div className="title">{paste.title}</div>
          <div className="paste-actions">
            <button>
              <a href={`/?pasteId=${paste._id}`}>Edit</a>
            </button>
            <button>
              <a href={`/pastes/${paste._id}`}>View</a>
            </button>
            <button onClick={() => handleDelete(paste._id)}>Delete</button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to Clipboard");
              }}
            >
              Copy
            </button>
            <button>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Paste;
