import React from 'react';
import s from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    cast && (
      <ul className={s.castList}>
        {cast
          .map(({ id, name, character, profile_path }) => {
            const SRC = profile_path
              ? `https://image.tmdb.org/t/p/w300/${profile_path}`
              : 'https://us.123rf.com/450wm/2nix/2nix1408/2nix140800098/30818271-anonymous-avatar-profile-icon-vector-.jpg?ver=6';

            return (
              <li className={s.castCard} key={id}>
                <div className={s.imgWrapper}>
                  <img className={s.img} src={SRC} alt={name} />
                </div>
                <p className={s.actor}>{name}</p>
                <p>{character}</p>
              </li>
            );
          })
          .slice(0, 20)}
      </ul>
    )
  );
};

export default Cast;
