
import React, { useState, useEffect } from 'react';
import styles from '../styles/section.module.scss';
import image1 from "../assets/images/home-banner1-desktop.jpg";
import image2 from "../assets/images/how-it-works-desktop.jpg";
import image3 from "../assets/images/our-mission.jpg";

export const Section = () => {

    const [allSection, setSection] = useState([]);
    
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
                comment: `We're on a mission to make it easy for every familly to sleep better. We apply state-of-the-art technology to science-based sleep understanding so that we can make quality, credible sleep support accessible to everyone - because every baby and their family deserve better sleep.`,
                label: `UNLOCK BETTER SLEEP`,
                image: image3
            },
            {
                id: 4,
                title: `Lumi is designed for`,
                comment: `Every parent who wants their baby to fall asleep, stay asleep, and wake up happy in the morning. Whether you're struggling with sleep or simply making sure your're doing what's best for your family, we have you covered.`,
                label: `GET STARTED`,
                image: image1
            }
        ]
        setSection(sections);
    }, [])

    const splite = (event) => {
        const comment = event.split(".");
        return (
            <>
                <strong>{comment[0]}.</strong>
                {comment.map((row, index) => (
                    index > 0 &&
                        <React.Fragment key={index}>
                            {row}
                        </React.Fragment>)
                )}
            </>
        )
    }

    return (
        <section>
            <div className={styles.section_content}>
                {allSection.map((row) => (
                    <div className={styles.section_content_child} key={row.id}>
                        <img src={row.image} alt="" />
                        <div className={styles.title_content}>
                            <div className={styles.info_content}>
                                <h1>{row.title}</h1>
                                <React.Fragment>
                                    <p>
                                        {splite(row.comment)}
                                    </p>
                                </React.Fragment>
                                {row.list && row.list.length > 0 &&
                                    <ul>
                                        {row.list.map((info) => (
                                            <React.Fragment key={info.id}>
                                                <li>
                                                    {splite(info.information)}
                                                </li>
                                            </React.Fragment>
                                        ))}
                                    </ul>}
                                {row.info && <h2>Zzzzz your baby sleeps!</h2>}
                            </div>
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
