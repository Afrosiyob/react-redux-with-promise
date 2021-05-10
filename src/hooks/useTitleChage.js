import { useState } from "react";

export function useTitleChange(initialTitle = "initial title") {
    const [title, setTitle] = useState(initialTitle);

    const handleChangeTitle = (newTitle) => {
        setTitle(newTitle);
    };

    return {
        title,
        handleChangeTitle,
    };
}