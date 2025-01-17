import React from 'react'
const modalOverlayStyle: any = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modalContentStyle: any = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    minWidth:'400px',
    minHeight:'300px',
    position: "relative",
};

const closeBtnStyle: any = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    cursor: "pointer",
};
const flex : any ={
    display:'flex',
    alignItem:'center',
    justifyContent:'space-between',
    marginBottom:'10px'
}

const Forms = ({ handleOpenForm, formData, handleSetData, addNewEmp }: any) => {
    const {firstName, lastName, email, dob, age, salary, address}:any = formData;
    const handleSubmit = ()=>{
        console.log(formData)
    }
    console.log(formData,firstName,lastName)

    return (
        <div style={modalOverlayStyle} onClick={handleOpenForm}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                <span style={closeBtnStyle} onClick={handleOpenForm}>
                    &times;
                </span>
                <h2>Add New Employee</h2>
                <form>
                    <div style={flex}>
                    <label htmlFor="input">Enter your name: </label>
                    <input name='firstName' value={firstName} type='text' onChange={handleSetData} />
                    </div>
                    <div style={flex}>
                    <label htmlFor="input">Enter your name: </label>
                    <input name='lastName' value={lastName} onChange={handleSetData}/>
                    </div>
                    <div style={flex}>
                    <label htmlFor="input">Enter your Age: </label>
                    <input name='age' value={age} onChange={handleSetData}/>
                    </div>
                    <div style={flex}>
                    <label htmlFor="input">Enter your dob: </label>
                    <input name='dob' value={dob} onChange={handleSetData}/>
                    </div>
                    <div style={flex}>
                    <label htmlFor="input">Enter your salary: </label>
                    <input name='salary' value={salary} onChange={handleSetData}/>
                    </div>
                    <div style={flex}>
                    <label htmlFor="input">Enter your email: </label>
                    <input name='email' type='email' value={email} onChange={handleSetData}/>
                    </div>
                    <div style={flex}>
                    <label htmlFor="input">Enter your Address: </label>
                    <input name='address'  value={address} onChange={handleSetData}/>
                    </div>
                </form>

                <button  onClick={addNewEmp}>Add</button>
            </div>
        </div>
    )
}

export default Forms;