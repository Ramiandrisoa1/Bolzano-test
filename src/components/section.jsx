
import React, { useState, useEffect } from 'react';
import styles from '../styles/section.module.scss';
import image1 from "../assets/images/home-banner1-desktop.jpg";
import image2 from "../assets/images/how-it-works-desktop.jpg";
import image3 from "../assets/images/our-mission.jpg";

export const Section = () => {

    const [allSection, setSection] = useState([]);
    const [allQuestion, setQuestion] = useState([]);
    
    useEffect(()=> {
        const sections = [
            {
                id: 1,
                title: `Your baby can be a super sleeper`,
                comment: `Lumi's app-bases sleep coaching and tracking tools will have your baby sleeping better in just 7 days`,
                label: `GET STARTED`,
                image: image1
            },
            {
                id: 2,
                title: `How it works`,
                comment: `Lumi's A, B, Cs, to better Zzzzs`,
                info: `Zzzzz your baby sleeps!`,
                label: `GET STARTED`,
                image: image2,
                list: [
                    {
                        id: 1,
                        information: `We coach. Our Pediatric sleep experts will take you step-by-step to sleep success`,
    
                    },
                    {
                        id: 2,
                        information: `You log. Record your baby's sleeps directly within the app`,
    
                    },
                    {
                        id: 3,
                        information: `We analyze. Daily and weekly sleep insight reports measure your baby's progress`,
    
                    }
                ]
            },
            {
                id: 3,
                title: `Our mission`,
                comment: `We're on a mission to make it easy for every familly to sleep better. We apply state-of-the-art technology to science-based sleep understanding so that we can make quality, credible sleep support accessible to everyone - because every baby and their family deserve better sleep!`,
                label: `UNLOCK BETTER SLEEP`,
                image: image3
            },
            {
                id: 4,
                title: `Lumi is designed for`,
                comment: `Every parent who wants their baby to fall asleep, stay asleep, and wake up happy in the morning. Whether you're doing what's best for your family, we have you covered.`,
                label: `GET STARTED`,
                image: image1
            }
        ]
    
        const questions = [
            {
                option: `What is baby sleep training?`,
            },
            {
                option: `Does the Lumi Smart Sleep Coach app work?`,
            },
            {
                option: `I don't have time to track manually, is there an alternative?`,
            },
            {
                option: `Is sleep training sage for my baby`,
            },
            {
                option: `Are there multiple sleep training methods to choose from?`,
            },
            {
                option: `How long does it take for my baby's sleep to improve?`,
            },
            {
                option: `When can I start training my baby to sleep with the Lumi Smart Sleep Coach?`,
            },
            {
                option: `Can I grant app access to other people who care for my baby?`,
            },
            {
                option: `Is it too late to sleep train my baby?`,
            },
            {
                option: `How long will I have access?`,
            },
            {
                option: `Can I cancel my plan?`,
            },
        ]
        setSection(sections);
        setQuestion(questions);
    }, [])

    console.log(allQuestion);

    return (
        <section>
            <div className={styles.section_content}>
                {allSection.map((row) => (
                    <div className={styles.section_content_child} key={row.id}>
                        <img src={row.image} alt="" />
                        <div className={styles.title_content}>
                            <h1>{row.title}</h1>
                            <p>{row.comment}</p>
                            <ul>
                                {row.list && row.list.length > 0 && row.list.map((info) => (
                                    <React.Fragment key={info.id}>
                                        <li>{info.information}</li>
                                    </React.Fragment>
                                ))}
                            </ul>
                            {row.info && <h2>Zzzzz your baby sleeps!</h2>}
                            <div className={styles.button}>
                                <button>{row.label}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
