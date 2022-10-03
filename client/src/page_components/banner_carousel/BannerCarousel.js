/* IMPORT DEPENDENCIES */
import { useEffect, useState } from 'react';

/* IMPORT STYLING */
import './BannerCarousel.css'

export default function BannerCarousel({ quotes }){

    const [slidesNum, setSlidesNum] = useState(0);

    function displayQuotes(){    

        if ((slidesNum + 2) > quotes.length || slidesNum < 0){
            setSlidesNum(0)
        };
        if (slidesNum >= 0){
            return(
                <div id="quote-slides">
                    <p id="quote-text">{quotes[slidesNum].text}</p>
                    <p id="quote-author">- {quotes[slidesNum].author}</p>
                </div>
            )
        };
    };
    
    useEffect(() => {
        displayQuotes(slidesNum)
    }, [slidesNum])

    return(
        <div id="quote-carousel-container">
            <button id="carousel-btns-prev" onClick={() => setSlidesNum(slidesNum + 1)}>❮</button>
            {displayQuotes()}
            <button id="carousel-btns-next" onClick={() => setSlidesNum(slidesNum - 1)}>❯</button>
        </div>
    )
};