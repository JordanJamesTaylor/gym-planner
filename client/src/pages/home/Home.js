/* IMPORT CUSTOM COMPONENTS */
import Banner from '../../page_components/banner/Banner';

export default function Home({ user }){

    console.log("HOME HIT");

    return(
        <div>
            <Banner user={user} />
        </div>
    )
};