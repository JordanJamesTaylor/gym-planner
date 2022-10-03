/* IMPORT CUSTOM COMPONENTS */
import Banner from '../../page_components/banner/Banner';

export default function Home({ user }){

    return(
        <div>
            <Banner user={user} />
        </div>
    )
};