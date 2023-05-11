
import React from 'react';
import styles from '../styles/section.module.scss';
import jsonData from '../assets/data.json';

export const Section = () => {

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
                {jsonData.sections.map((data) => (
                    <div className={styles.section_content_child} key={data.id}>
                        <img src={require(`../assets/images/${data.image}`)} alt={data.image} />
                        <div className={styles.title_content}>
                            <div className={styles.info_content}>
                                <h1>{data.title}</h1>
                                <React.Fragment>
                                    <p>
                                        {splite(data.comment)}
                                    </p>
                                </React.Fragment>
                                {data.list && data.list.length > 0 &&
                                    <ul>
                                        {data.list.map((info) => (
                                            <React.Fragment key={info.id}>
                                                <li>
                                                    {splite(info.information)}
                                                </li>
                                            </React.Fragment>
                                        ))}
                                    </ul>}
                                {data.info && <h2>Zzzzz your baby sleeps!</h2>}
                            </div>
                            <div className={styles.button}>
                                <button>{data.label}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
