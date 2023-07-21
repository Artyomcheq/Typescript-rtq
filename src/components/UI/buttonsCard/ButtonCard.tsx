import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchPosts } from '../../../store/reducer/ActionCreator';
import s from "./ButtonCard.module.scss"

const ButtonCard = () => {

    const dispatch = useAppDispatch()
    const [displayCount, setDisplayCount] = useState(10);

    const showMore = () => {
        setDisplayCount((prevCount) => prevCount + 10);
    };

    useEffect(() => {
        dispatch(fetchPosts(displayCount))
    }, [displayCount])
    return (
        <div className={s.btnCard}>
            <button onClick={showMore}>Показать больше</button>
        </div>
    );
};

export default ButtonCard;