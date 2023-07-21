import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../store/reducer/ActionCreator';
import ButtonCard from '../UI/buttonsCard/ButtonCard';
import s from "./TodosCard.module.scss"

const TodosCard = () => {
    const { todos, isLoading, error } = useAppSelector(state => state.postReducer)

    return (
        <div className={s.todos}>
            <div className='container'>
                <div className={s.todos_field}>
                    <ButtonCard />
                    {todos.map((todo) =>
                        <div className={s.todos_card}>
                            <input type="checkbox" checked={todo.completed} />
                            <p>{todo.title}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodosCard;