import Navbar from "./components/Navbar";
import FileInput from "./components/FileInput";
import { useState } from "react";
import { getAllItensInLocaStorage } from "./utils/localStorage";

export default function App() {
    const listImages = getAllItensInLocaStorage();

    return (
        <>
            <Navbar />
            <div className="w-screen flex justify-center">
                <FileInput />
            </div>
            {listImages.map((url) => (
                <img src={url} />
            ))}
        </>
    );
}