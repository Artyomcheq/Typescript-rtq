import React, { FC, useState, useEffect } from 'react';
import { IAlbum } from '../../models/models';
import { albumAPI } from '../../services/AlbumServices';
import s from "./Albums.module.scss";

const AlbumCard: FC = () => {
  const [displayCount, setDisplayCount] = useState(9);
  const { data: albums } = albumAPI.useFetchAllPostsQuery(displayCount);
  const [albumsAll, setAlbumsAll] = useState<IAlbum[]>(albums || []);
  const [sortById, setSortAll] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    setAlbumsAll(albums || []);
  }, [albums]);

  const showMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  const deleteAlbum = (albumId: number) => {
    if (albumsAll) {
      const updatedAlbums = albumsAll.filter((album) => album.id !== albumId);
      setAlbumsAll(updatedAlbums);
    }
  };

  const sortAlbumsAll = () => {
    setSortAll((sort) => (sort === 'asc' ? 'desc' : 'asc'));
  };

  const sortedAlbums = albumsAll.slice().sort((a, b) => {
    if (sortById === 'asc') {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  return (
    <div className={s.albums}>
      <div className='container'>
        <button onClick={showMore}>Показать больше</button>
        <button onClick={sortAlbumsAll}>Сортировать</button>
        {sortedAlbums.map((album) => (
          <div className={s.albums_card} key={album.id}>
            <p>{album.id}. {album.title}</p>
            <button onClick={() => deleteAlbum(album.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumCard;