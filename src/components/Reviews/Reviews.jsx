import React from 'react';
import Container from '../Container/Container';
import s from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <Container>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={s.item} key={id}>
                <span className={s.author}>{author}</span>
                <p
                  className={s.content}
                  onClick={({ target }) =>
                    target.classList.remove(`${s.content}`)
                  }
                >
                  {content}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.notice}>We don't have any reviews for this movie</p>
      )}
    </Container>
  );
};

export default Reviews;
