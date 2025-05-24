interface NewTodoFormProps {
    value: string,
    updateText: (str: string) => void,
    handleclick: () => void,
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ value, updateText, handleclick }) => {
    return (
        <div style={{marginLeft: "60px", }}>
            <h1 className="title1">Dobavit:</h1>
            <input
                placeholder="Dobavit"
                value={value}
                onChange={(e) => updateText(e.target.value)}
                className="input-comp"
            />
            <button onClick={handleclick} className="btn1">Dobavit</button>
        </div>
    );
};

export default NewTodoForm;
