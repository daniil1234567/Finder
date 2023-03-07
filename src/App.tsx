import React from "react";
import MoreSvg from "./assets/MoreSvg";

export const avatar = 'https://sun9-east.userapi.com/sun9-29/s/v1/if1/Y2p8Vt8_aFebbdXDDfM6nuA_rMt0ECQIc1tjzCAlsrQXIjU1mZy8RaW4SkDNIE0RGc-FrFBb.jpg?size=200x200&quality=96&crop=704,145,1148,1148&ava=1'

const ReactionBtn = () => {
    return (
        <div className={'w-41 h-41 bg-light rounded-15'}>

        </div>
    );
};

const Post = () => {
    return (
        <div className={'w-428 bg-white'}>
            <header className={'flex flex-row mx-22'}>
                <img className='w-36 h-36 rounded-18 bg-black text-10 font-bold' src={avatar}/>
                <div className={'flex flex-col px-10 w-full'}>
                    <span>{'Даниил Обухов'}</span>
                    <span className={'text-middle text-9'}>{'сегодня в 15:30'}</span>
                </div>
                <MoreSvg/>
            </header>
            <main>
                <span className={'text-middle text-9 my-10 px-10'}>
                {'В Нью-Йорке есть тысячи возможностей весело провести время.\n' +
                    'Там можно покататься на канатной дороге прямо над городом, сходить на бродвейский мюзикл, посмотреть на скелет тираннозавра или подняться на корону статуи Свободы.\n' +
                    'Все районы Нью-Йорка колоритные и не похожи друг на друга. В Чайна-тауне живут приезжие из Азии, а на Брайтон-Бич — из России. В Гарлеме слушают джаз, а в Сохо ходят в модные галереи и кафе. После поездки в Нью-Йорк есть ощущение, будто побывал в нескольких странах сразу.'}</span>
            </main>
            <div className={'mt-15 bg-middle w-full h-[500px]'}>

            </div>
            <footer className={'flex flex-row justify-between mt-22 mx-15'}>
                <div className={'flex flex-row space-x-10'}>
                    <ReactionBtn/>
                    <ReactionBtn/>
                    <ReactionBtn/>
                </div>
                <ReactionBtn/>
            </footer>
        </div>
    );
};

export default function App() {
    return (
        <div className={'w-screen h-screen flex bg-light'}>
            <Post/>
        </div>
    )
    //return (
    //    <>
    //        <Navigation/>
    //        <Routes>
    //            <Route path={'/'} element={<ProductsPages/>}/>
    //            <Route path={'/about'} element={<AboutPage/>}/>
    //        </Routes>
    //    </>
    //)
}
