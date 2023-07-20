import React, { FC, useEffect, useState } from 'react';
import { IPost } from '../../models/models';
import { postAPI } from '../../services/PostService';
import s from "./Posts.module.scss"

const PostCard: FC = () => {
    const [displayCount, setDisplayCount] = useState(9)
    const { data: posts } = postAPI.useFetchAllPostsQuery(displayCount)
    const [sortPosts, setSortPosts] = useState<"asc" | "desc">("asc")
    const [postsAll, setPostsAll] = useState<IPost[]>(posts || [])

    useEffect(() => {
        setPostsAll(posts || [])
    }, [posts])

    const showMore = () => {
        setDisplayCount((prevCount) => prevCount + 10);
    }

    const sortPost = () => {
        setSortPosts((sort) => (sort === "asc" ? "desc" : "asc"))
    }

    const deletePost = (postId: number) => {
        if (postsAll) {
            const updatePosts = postsAll.filter((post) => post.id !== postId)
            setPostsAll(updatePosts)
        }
    }

    const sortedPost = postsAll.slice().sort((a, b) => {
        if (sortPosts === 'asc') {
            return a.id - b.id;
        } else {
            return b.id - a.id;
        }
    });

    return (
        <section className={s.posts}>
            <div className='container'>
                <div className={s.posts_field}>
                    <div className={s.posts_field_btn}>
                        <button onClick={showMore}>Показать больше</button>
                        <button onClick={sortPost}>Отсортировать</button>
                    </div>
                    <div className={s.posts_field_cards}>
                        {sortedPost?.map((post) => (
                            <div className={s.posts_field_card} key={post.id}>
                                <h3>{post.id}. {post.title}</h3>
                                <p>{post.body}</p>
                                <button onClick={() => deletePost(post.id)}>Удалить</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostCard;