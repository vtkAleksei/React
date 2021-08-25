import React, { useCallback, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading, selectPictures } from '../../store/pictures/selectors';
import { getPictures } from '../../store/pictures/actions';
import './style.css';

export const Pictures = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const pictures = useSelector(selectPictures);
  const reqestRepeat = useCallback(() => {
    dispatch(getPictures());
  }, []);

  useEffect(() => {
    reqestRepeat();
  }, []);

  if (loading) {
    return <CircularProgress color="secondary" />
  }

  if (error) {
    return (
      <>
        <h3>Error: invalid page address</h3>
        <button onClick={reqestRepeat}>repeat the request</button>
      </>
    )
  }

  return (
    <>
  <h2>Заголовок добавлен по рекомендации Lighthouse</h2>
  <img className="picture" src={pictures.message} alt="Картинка"></img>
  <button onClick={reqestRepeat}>change the drawing</button>
    </>
  )
}
