import React from "react";

interface NewChangeaItem {
    title: string,
}

const ChangeItem: React.FC<NewChangeaItem> = ({ title}) => {
    return (
        <div style={{backgroundColor: "gray"}}>
            <span>{title}</span>
        </div>
    );
}

export default ChangeItem;
