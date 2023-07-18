import React from 'react';
import {TbDog} from "react-icons/tb";
import '../css/breedResult.css'

function SearchResult({isInvalid, searchData}) {
    //zwórcenie layoutu który wyświetli informacje o braku danej rasy w bazie
    if(isInvalid){
        return (
            <div className={'banner'}>
                <div className={'no-banner_img'}>
                    <TbDog color={'#f5f5f5'} size={84}/>
                </div>
                <p className={'banner_msg'}>
                    Ajajaj! Tej rasy nie ma jeszcze w naszej bazie. Poszukaj innej.
                </p>
            </div>
        )
    }

    if(!searchData.state){
        return (
            <div className={'banner'}>
                <div className={'banner_img'}></div>
                <p className={'banner_msg'}>
                    Tu wyświetlimy informacje o interesującym Cię pupilu.
                </p>
            </div>
        )
    }

    //zwrócenie właściwego formatu danych wyjściowych
    return (
        <div className={'result'}>
            <div className={'result_img-wrapper'}>
                <img src={'result_img'} alt={`Image of a breed`}/>
            </div>
            <h3 className={'result_title'}>breed</h3>
            <p className={'result_msg'}>
                Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z ogrodem. Wysokość w kłębie 30-35 cm, masa ciała 22-25 kg. Sierść krótka, delikatna, lśniąca, umaszczenie płowe, pręgowane lub łaciate. Charakter czujny, śmiały, oddany, odważny, łagodny, czasem uparty. W zależności od dnia pokazuje różne oblicza swojej natury.
            </p>
        </div>
    );
}

export default SearchResult;