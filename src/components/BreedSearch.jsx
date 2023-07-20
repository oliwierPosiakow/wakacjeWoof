import React from 'react';
import {TbDog} from "react-icons/tb";
import '../css/breedResult.css'

//SearchResult to dodatkowy komponen pomocniczy który przyjmuje dane i w zależności od tego co otrzyma renderuje odpowiedni layout
function SearchResult({isInvalid, breedData}) {
    //sprawdzenie czy jakiekolwiek dane zostały przekazane poprzez propsy
    const noData = breedData.img.length <= 0 && breedData.name.length <= 0 ? true : false
    //domyślne teksty dla <p> 'banner_msg'
    const noBreed = 'Ajajaj! Tej rasy nie ma jeszcze w naszej bazie. Poszukaj innej.'
    const defaultMsg = 'Tu wyświetlimy informacje o interesującym Cię pupilu.'

    //zwórcenie domyślnego layoutu lub takiego który wyświetli informacje o braku danej rasy w bazie danych
    if(isInvalid || noData){
        return (
            <div className={'banner'}>
                {isInvalid ?
                    <div className={'no-banner_img'}>
                        <TbDog color={'#f5f5f5'} size={84}/>
                     </div> :
                    noData ?
                        <div className={'banner_img'}></div> : ''
                }
                <p className={'banner_msg'}>
                    {isInvalid ? noBreed : noData ? defaultMsg : ''}
                </p>
            </div>
        )
    }
    //zwrócenie właściwego layoutu ze zdjęciem rasy oraz jej nazwą
    return (
        <div className={'result'}>
            <div className={'result_img-wrapper'}>
                <img className={'breed-img'} src={breedData.img} alt={`Image of a ${breedData.name} breed.`}/>
            </div>
            <h3 className={'result_title'}>{breedData.name}</h3>
            <p className={'result_msg'}>
                Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z ogrodem.<br/><br/> Wysokość w kłębie 30-35 cm, masa ciała 22-25 kg. Sierść krótka, delikatna, lśniąca, umaszczenie płowe, pręgowane lub łaciate. Charakter czujny, śmiały, oddany, odważny, łagodny, czasem uparty. W zależności od dnia pokazuje różne oblicza swojej natury.
            </p>
        </div>
    );
}

export default SearchResult;