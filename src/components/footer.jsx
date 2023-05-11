import React from 'react';
import styles from '../styles/footer.module.scss';
import jsonData from '../assets/data.json';

export const Footer = () => {

    return (
        <div className={styles.question_content}>
            <h3>We're here  to answer your questions</h3>
            {jsonData.questions.map((jsonData) =>(
                <React.Fragment key={jsonData.id}>
                    <div className={styles.questions}>
                        <p>{jsonData.option}</p>
                        <span className={styles.chevron}></span>
                    </div>
                </React.Fragment>
            ))}
            <div className={styles.button}>
                <button>GET STARTED</button>
            </div>
        </div>
    )
}