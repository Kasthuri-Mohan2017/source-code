import { useState } from "react";
import axios from "axios";
import AdminHome from "./AdminHome";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from "../Styles/AddStudent.module.css";
const initState = {
    name: "",
    email:"",
    city: "",
    age: "",
    education: "",
    gender: "",
    contact: "",
}
const AddStudent = () => {
    const [data, setData] = useState(initState);
    //destructuring data and get the keys
    const { name, city, age, education, gender, contact, email } = data;
    //storing students data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //sending students data to backend
        axios.post("http://localhost:4000/students", data)
            .then(res => alert("Succefully added data!"))
            .catch(err => console.log(err))
    }
    return (
        <>
            <AdminHome/>
        <div className={styles.container}>
            <div>
                <h1 className={styles.addStudentHeading}>Add Student Details</h1>
                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className={styles.formContainer}
                >
                    <div className={styles.inputFields}>
                         <TextField
                            label="Enter Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                            />
                            <TextField
                            label="Enter Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            label="Enter Address"
                            name="city"
                            value={city}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            type="Enter Age"
                            label="Age"
                            name="age"
                            value={age}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            label="Enter Department"
                            name="education"
                            value={education}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            label="Enter Gender"
                            name="gender"
                            value={gender}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            type="Enter Mobile number"
                            label="Contact"
                            name="contact"
                            value={contact}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    
                    <Button color="primary" variant="outlined" type="submit" className={styles.submitBtn}>Submit</Button>
                   </div>
                </form>
            </div>
            </div>
            </>
    )
}

export default AddStudent;