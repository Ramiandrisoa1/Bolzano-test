import React, { useState, useEffect } from 'react';
import styles from '../styles/footer.module.scss';

export const Footer = () => {

    const [allQuestion, setQuestion] = useState([]);
    
    useEffect(()=> {
        const questions = [
            {
                id: 1,
                option: `What is baby sleep training?`,
            },
            {
                id: 2,
                option: `Does the Lumi Smart Sleep Coach app work?`,
            },
            {
                id: 3,
                option: `I don't have time to track manually, is there an alternative?`,
            },
            {
                id: 4,
                option: `Is sleep training sage for my baby`,
            },
            {
                id: 5,
                option: `Are there multiple sleep training methods to choose from?`,
            },
            {
                id: 6,
                option: `How long does it take for my baby's sleep to improve?`,
            },
            {
                id: 7,
                option: `When can I start training my baby to sleep with the Lumi Smart Sleep Coach?`,
            },
            {
                id: 8,
                option: `Can I grant app access to other people who care for my baby?`,
            },
            {
                id: 9,
                option: `Is it too late to sleep train my baby?`,
            },
            {
                id: 10,
                option: `How long will I have access?`,
            },
            {
                id: 11,
                option: `Can I cancel my plan?`,
            },
        ]
        
        setQuestion(questions);
    }, [])

    return (
        <div className={styles.question_content}>
            <h3>We're here  to answer your questions</h3>
            {allQuestion.map((row) =>(
                <React.Fragment key={row.id}>
                    <div className={styles.questions}>
                        <p>{row.option}</p>
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