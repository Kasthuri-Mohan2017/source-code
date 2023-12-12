import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Styles/HomePage.module.css";
import { Link } from "react-router-dom";

export const StudentContests = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/contest")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
        <div className={styles.leftContainer}>
                {/** navigation routes links */}
                <nav>
                    
                    <Link to="/" className={styles.navRoutes}> Log Out </Link>
                </nav>
                
            </div>
         <div className={styles.contestContainer}>
                {data && data.map((item) => {
                    var tags = item.tags.split(",");
                    var temp = [];
                    for (var i = 0; i < tags.length; i++){
                        var temp1 = tags[i].split(" ");
                        temp.push(temp1);
                    }
                    tags = temp;
                    return (
                        <div key={item._id}>
                            <h1>{item.title}</h1>
                            <p>Type: {item.type}</p>
                            <p>Start Time: {item.startTime}</p>
                            <p>End Time: {item.endTime}</p>
                            <div className={styles.tagContainer}> Tags: {tags.map((tag, index) => {
                                return  tag.map((e, index) => {
                                return <div key={index}>{e}</div>
                            })
                            })}</div>
                
                        </div>
                    )
                })}
            </div>
            </>
    )
}