import React, { FC } from 'react';
import s from "./Header.module.scss"
import { NavLink } from "react-router-dom"

const Header: FC = () => {
    return (
        <>
            <div className={s.header}>
                <div className='container'>
                    <div className={s.header_field}>
                        <h3>Logo</h3>
                        <div className={s.header_nav}>
                            <NavLink to={"/"}>Посты</NavLink >
                            <NavLink to={"/album"}>Фото</NavLink >
                            <NavLink to={"/album"}>Задачи</NavLink >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;