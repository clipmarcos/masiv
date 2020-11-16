import React, { useEffect, useState } from 'react';
import { getComic } from '../../Api/comicApi';

import './sass/styles.scss';

const ComicView = () => {

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {

        getLisComict();

    }, []);


    const getLisComict = async () => {
        setLoader(true);
        const randomOK = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        const resp = await getComic({ random: randomOK });
       


        if (resp === undefined) {
           
            return
        }
        if (resp.status === 200) {
            
            const { title } = resp.data;
            const { img } = resp.data;
            setTitle(title);
            setImg(img);
            setLoader(false);
        }
    }



    return (
        <>
            <main>
                
                    <div className="content-comic">
                        <h1 className="comic-title animate__animated animate__rollIn ">{title}</h1>

                        {loader ? <div className="loader"></div>
                            :
                            <div className="comic-body">

                                <img className="comic-img animate__animated animate__backInDown " src={img} alt="comic_img" />
                                <div className="comic-voto animate__animated animate__fadeInUpBig animate__slow">

                                    <form>
                                        <p className="clasificacion">
                                            <input id="radio1" type="radio" name="estrellas" value="5" />
                                            <label htmlFor="radio1">★</label>
                                            <input id="radio2" type="radio" name="estrellas" value="4" />

                                            <label htmlFor="radio2">★</label>
                                            <input id="radio3" type="radio" name="estrellas" value="3" />
                                            <label htmlFor="radio3">★</label>
                                            <input id="radio4" type="radio" name="estrellas" value="2" />
                                            <label htmlFor="radio4">★</label>
                                            <input id="radio5" type="radio" name="estrellas" value="1" />
                                            <label htmlFor="radio5">★</label>
                                        </p>
                                    </form>

                                </div>
                            </div>
                        }
                    </div>
                
            </main>
        </>
    )
}

export default ComicView
