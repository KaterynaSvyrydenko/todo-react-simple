function CreateTask(props) {
    const { handleFormShow = Function.prototype } = props;

    return <div className="btn-wrap">
        <div className="waves-effect waves-light btn" onClick={handleFormShow}>Create New Task</div>
    </div>
}

export {CreateTask};