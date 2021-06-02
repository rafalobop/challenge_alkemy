import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroes } from '../helpers/rutaHeroes';
import swal from 'sweetalert';

const HeroDetail = () => {
  const [data, setData] = useState({
    ok: false,
    heroe: {},
  });
  let { id } = useParams();

  useEffect(() => {
    getHeroes(id).then((datos) => {
      setData(datos);
    });
  }, [id]);

  return (
    <>
      <div className="heroDetail">
        {data.ok ? (
          console.log(data)
        ) : (
          <div className="col">
            <div className="row">
              {swal('Ups', 'No hay heroe para mostrar', 'error')}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroDetail;
