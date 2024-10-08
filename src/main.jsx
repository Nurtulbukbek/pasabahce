import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Catalog from './Catalog.jsx'
import AboutUs from './AboutUs.jsx'
import Contacts from './Contacts.jsx'

import Vine from './catalogFiles/Vine.jsx'
import BakingDishes from './catalogFiles/BakingDishes.jsx'
import Beer from './catalogFiles/Beer.jsx'
import Champagne from './catalogFiles/Champagne.jsx'
import Decanter from './catalogFiles/Decanter.jsx'
import Others from './catalogFiles/Others.jsx'
import Ryumka from './catalogFiles/Ryumka.jsx'
import Soda from './catalogFiles/Soda.jsx'
import Tea from './catalogFiles/Tea.jsx'

// -------soda-----
import Aquatic41971 from '/src/catalogFilesPhotos/sodaPhotos/Aquatic41971'
import Valse42294 from './catalogFilesPhotos/sodaPhotos/Valse42294.jsx'
import Casablanca52707 from './catalogFilesPhotos/sodaPhotos/Casablanca52707.jsx'
import Snap41632 from './catalogFilesPhotos/sodaPhotos/Snap41632.jsx'
import Leia420765 from './catalogFilesPhotos/sodaPhotos/Leia420765.jsx'
import Leia420174 from './catalogFilesPhotos/sodaPhotos/Leia420174.jsx'
import Karat52888 from './catalogFilesPhotos/sodaPhotos/Karat52888.jsx'
import Karat52885 from './catalogFilesPhotos/sodaPhotos/Karat52885.jsx'
import Allegra410536 from './catalogFilesPhotos/sodaPhotos/Allegra410536.jsx'
import Allegra420015 from './catalogFilesPhotos/sodaPhotos/Allegra420015.jsx'
import Elysia520015 from './catalogFilesPhotos/sodaPhotos/Elysia520015.jsx'
import Elysia5200014 from './catalogFilesPhotos/sodaPhotos/Elysia5200014.jsx'
import Elysia520004 from './catalogFilesPhotos/sodaPhotos/Elysia520004.jsx'
import Timeless52800 from './catalogFilesPhotos/sodaPhotos/Timeless52800.jsx'
import Timeless52820 from './catalogFilesPhotos/sodaPhotos/Timeless52820.jsx'
import Timeless51790 from './catalogFilesPhotos/sodaPhotos/Timeless51790.jsx'
import Timeless52810 from './catalogFilesPhotos/sodaPhotos/Timeless52810.jsx'
import Sylvana42812 from './catalogFilesPhotos/sodaPhotos/Sylvana42812.jsx'
import Sylvana42415 from './catalogFilesPhotos/sodaPhotos/Sylvana42415.jsx'
import Dance42868 from './catalogFilesPhotos/sodaPhotos/Dance42868.jsx'
import Amorf420224 from './catalogFilesPhotos/sodaPhotos/Amorf420224.jsx'
import Pleasure420103 from './catalogFilesPhotos/sodaPhotos/Pleasure420103.jsx'
import Karat52882 from './catalogFilesPhotos/sodaPhotos/Karat52882.jsx'
import Bistro44872 from './catalogFilesPhotos/sodaPhotos/Bistro44872.jsx'
import Soda52704 from './catalogFilesPhotos/sodaPhotos/Soda52704.jsx'
import Aquatic42975 from './catalogFilesPhotos/sodaPhotos/Aquatic42975.jsx'
import Basic55531 from './catalogFilesPhotos/sodaPhotos/Basic55531.jsx'
import Basic520102 from './catalogFilesPhotos/sodaPhotos/Basic520102.jsx'
import Bingo440511 from './catalogFilesPhotos/sodaPhotos/Bingo440511.jsx'
import Allegra41536 from './catalogFilesPhotos/sodaPhotos/Allegra41536.jsx'
import Kosem42083 from './catalogFilesPhotos/sodaPhotos/Kosem42083.jsx'
import Luna42338 from './catalogFilesPhotos/sodaPhotos/Luna42338.jsx'
import Luna42348 from './catalogFilesPhotos/sodaPhotos/Luna42348.jsx'
import Luna42358 from './catalogFilesPhotos/sodaPhotos/Luna42358.jsx'
import Luna42378 from './catalogFilesPhotos/sodaPhotos/Luna42378.jsx'
import Side42253 from './catalogFilesPhotos/sodaPhotos/Side42253.jsx'
import Side42435 from './catalogFilesPhotos/sodaPhotos/Side42435.jsx'
import Side42884 from './catalogFilesPhotos/sodaPhotos/Side42884.jsx'
import Tango42949 from './catalogFilesPhotos/sodaPhotos/Tango42949.jsx'
import Valse41536 from './catalogFilesPhotos/sodaPhotos/Valse41536.jsx'
import Valse42949 from './catalogFilesPhotos/sodaPhotos/Valse42949.jsx'
// ---------vine------
import Imperial44272 from './catalogFilesPhotos/vinePhotos/imperial44272.jsx'
import Tulipe44162 from './catalogFilesPhotos/vinePhotos/Tulipe44162.jsx'
import Enoteca44728 from './catalogFilesPhotos/vinePhotos/Enoteca44728.jsx'
import Dalida440873 from './catalogFilesPhotos/vinePhotos/Dalida440873.jsx'
import Allegra440060 from './catalogFilesPhotos/vinePhotos/Allegra440060.jsx'
import Vintage440184 from './catalogFilesPhotos/vinePhotos/Vintage440184.jsx'
import Isabella440271 from './catalogFilesPhotos/vinePhotos/Isabella440271.jsx'
import Isabella440272 from './catalogFilesPhotos/vinePhotos/Isabella440272.jsx'
import Allegra440265 from './catalogFilesPhotos/vinePhotos/Allegra440265.jsx'
import Amber440275 from './catalogFilesPhotos/vinePhotos/Amber440275.jsx'
import Allegra440080 from './catalogFilesPhotos/vinePhotos/Allegra440080.jsx'
import Vine44248 from './catalogFilesPhotos/vinePhotos/Vine44248.jsx'
import Bistro44188 from './catalogFilesPhotos/vinePhotos/Bistro44188.jsx'
import Bistro44411 from './catalogFilesPhotos/vinePhotos/Bistro44411.jsx'
import Charante44816 from './catalogFilesPhotos/vinePhotos/Charante44816.jsx'
import Charante440218 from './catalogFilesPhotos/vinePhotos/Charante440218.jsx'
import Enoteca44248 from './catalogFilesPhotos/vinePhotos/Enoteca44248.jsx'
import Tulipe44163 from './catalogFilesPhotos/vinePhotos/Tulipe44163.jsx'
import Karat440148 from './catalogFilesPhotos/vinePhotos/Karat440148.jsx'

// --------ryumki------
import Dance42864 from './catalogFilesPhotos/ryumkaPhotos/Dance42864.jsx'
import Dance42865 from './catalogFilesPhotos/ryumkaPhotos/Dance42865.jsx'
import Allegra42043 from './catalogFilesPhotos/ryumkaPhotos/Allegra42043.jsx'
import Basic52837 from './catalogFilesPhotos/ryumkaPhotos/Basic52837.jsx'
import Side41050 from './catalogFilesPhotos/ryumkaPhotos/Side41050.jsx'
import Elysia from './catalogFilesPhotos/ryumkaPhotos/Elysia.jsx'
import Retro440074 from './catalogFilesPhotos/ryumkaPhotos/Retro440074.jsx'
import Vintage440182 from './catalogFilesPhotos/ryumkaPhotos/Vintage440182.jsx'
import Amber440286 from './catalogFilesPhotos/ryumkaPhotos/Amber440286.jsx'
import Bistro44164 from './catalogFilesPhotos/ryumkaPhotos/Bistro44164.jsx'
import Bingo42284 from './catalogFilesPhotos/ryumkaPhotos/Bingo42284.jsx'
import Dalida440142 from './catalogFilesPhotos/ryumkaPhotos/Dalida440142.jsx'
import Side52837 from './catalogFilesPhotos/ryumkaPhotos/Side52837.jsx'
import Sylvana42244 from './catalogFilesPhotos/ryumkaPhotos/Sylvana42244.jsx'
import Elysia520242 from './catalogFilesPhotos/ryumkaPhotos/Elysia520242.jsx'
import Luna42043 from './catalogFilesPhotos/ryumkaPhotos/Luna42043.jsx'

// ----------beer--------
import Pub55299 from './catalogFilesPhotos/beerPhotos/Pub5529.jsx'
import Pub55229 from './catalogFilesPhotos/beerPhotos/Pub55229.jsx'
import Pub55289 from './catalogFilesPhotos/beerPhotos/Pub55289.jsx'
import Pub42528 from './catalogFilesPhotos/beerPhotos/Pub42528.jsx'
import Pub42477 from './catalogFilesPhotos/beerPhotos/Pub42477.jsx'
import Bacchus80113 from './catalogFilesPhotos/beerPhotos/Bacchus80113.jsx'
import Pub42199 from './catalogFilesPhotos/beerPhotos/Pub42199.jsx'
import Pub420497 from './catalogFilesPhotos/beerPhotos/Pub420497.jsx'
import Bistro44417 from './catalogFilesPhotos/beerPhotos/Bistro44417.jsx'
import Pub55341 from './catalogFilesPhotos/beerPhotos/Pub55341.jsx'
import Pub55861 from './catalogFilesPhotos/beerPhotos/Pub55861.jsx'

//-----------Champagne------------
import Enoteca440161 from './catalogFilesPhotos/champagnePhotos/Enoteca440161.jsx'
import Bistro44410 from './catalogFilesPhotos/champagnePhotos/Bistro44410.jsx'
import Tulipe44160 from './catalogFilesPhotos/champagnePhotos/Tulipe44160.jsx'
import Vintage440283 from './catalogFilesPhotos/champagnePhotos/Vintage440283.jsx'

// ---------Decanter---------
import Frigo80122 from './catalogFilesPhotos/DecanterPhotos/Frigo80122.jsx'
import Köşem43414 from './catalogFilesPhotos/DecanterPhotos/Köşem43414.jsx'
import Bacchus80111 from './catalogFilesPhotos/DecanterPhotos/Bacchus80111.jsx'
import Bistro43944 from './catalogFilesPhotos/DecanterPhotos/Bistro43944.jsx'
import Frigo80050 from './catalogFilesPhotos/DecanterPhotos/Frigo80050.jsx'
import Basic43964 from './catalogFilesPhotos/DecanterPhotos/Basic43964.jsx'

// ----------tea---------
import Tea97948 from './catalogFilesPhotos/testTeaFolder/Tea97948.jsx'
import Chroma55813 from './catalogFilesPhotos/testTeaFolder/Chroma55813.jsx'
import Tashkent96806 from './catalogFilesPhotos/testTeaFolder/Tashkent96806.jsx'
import TeaCoffee55411 from './catalogFilesPhotos/testTeaFolder/TeaCoffee55411.jsx'
import Timeless42881 from './catalogFilesPhotos/testTeaFolder/Timeless42881.jsx'

//---------others-----------
import Basic55022 from './catalogFilesPhotos/othersPhotos/Basic55022.jsx'
import Basic96814 from './catalogFilesPhotos/othersPhotos/Basic96814.jsx'
import Aurora95834 from './catalogFilesPhotos/othersPhotos/Aurora95834.jsx'
import Bistro54036 from './catalogFilesPhotos/othersPhotos/Bistro54036.jsx'
import BlackWhite80030 from './catalogFilesPhotos/othersPhotos/BlackWhite80030.jsx'
import Borcam59003 from './catalogFilesPhotos/othersPhotos/Borcam59003.jsx'
import Borcam59013 from './catalogFilesPhotos/othersPhotos/Borcam59013.jsx'
import Borcam59014 from './catalogFilesPhotos/othersPhotos/Borcam59014.jsx'
import Borcam59024 from './catalogFilesPhotos/othersPhotos/Borcam59024.jsx'
import Borcam59052 from './catalogFilesPhotos/othersPhotos/Borcam59052.jsx'
import Borcam59062 from './catalogFilesPhotos/othersPhotos/Borcam59062.jsx'
import Borcam59204 from './catalogFilesPhotos/othersPhotos/Borcam59204.jsx'
import Borcam59544 from './catalogFilesPhotos/othersPhotos/Borcam59544.jsx'
import Borcam59544scn from './catalogFilesPhotos/othersPhotos/Borcam59544 2.jsx'
import Ceshni97424 from './catalogFilesPhotos/othersPhotos/Ceshni97424.jsx'
import Cesni97560 from './catalogFilesPhotos/othersPhotos/Cesni97560.jsx'
import Flora43267 from './catalogFilesPhotos/othersPhotos/Flora43267.jsx'
import Flora43966 from './catalogFilesPhotos/othersPhotos/Flora43966.jsx'
import Homemade80383 from './catalogFilesPhotos/othersPhotos/Homemade80383.jsx'
import Homemade80384 from './catalogFilesPhotos/othersPhotos/Homemade80384.jsx'
import IceVilley51008 from './catalogFilesPhotos/othersPhotos/IceVilley51008.jsx'
import IceVilley41016 from './catalogFilesPhotos/othersPhotos/IceVilley41016.jsx'
import IceVilley51068 from './catalogFilesPhotos/othersPhotos/IceVilley51068.jsx'
import Kanya54332 from './catalogFilesPhotos/othersPhotos/Kanya54332.jsx'
import Karat96326 from './catalogFilesPhotos/othersPhotos/Karat96326.jsx'
import KitchenSlim96762 from './catalogFilesPhotos/othersPhotos/KitchenSlim96762.jsx'
import KitchenSlim96763 from './catalogFilesPhotos/othersPhotos/KitchenSlim96763.jsx'
import Kosem54076 from './catalogFilesPhotos/othersPhotos/Kosem54076.jsx'
import Kremlin97624 from './catalogFilesPhotos/othersPhotos/Kremlin97624.jsx'
import Kremlin97626 from './catalogFilesPhotos/othersPhotos/Kremlin97626.jsx'
import Lacy96136 from './catalogFilesPhotos/othersPhotos/Lacy96136.jsx'
import Patissiere95117 from './catalogFilesPhotos/othersPhotos/Patissiere95117.jsx'
import Patissiere95200 from './catalogFilesPhotos/othersPhotos/Patissiere95200.jsx'
import Patissiere98259 from './catalogFilesPhotos/othersPhotos/Patissiere98259.jsx'
import Piknik54646 from './catalogFilesPhotos/othersPhotos/Piknik54646.jsx'
import Timeless51759 from './catalogFilesPhotos/othersPhotos/Timeless51759.jsx'
import Viva96374 from './catalogFilesPhotos/othersPhotos/Viva96374.jsx'
import Village43824 from './catalogFilesPhotos/othersPhotos/Village43824.jsx'
import Woody42338 from './catalogFilesPhotos/othersPhotos/Woody42338.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/catalog',
        element: <Catalog />
    },
    {
        path: '/about-us',
        element: <AboutUs />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
    {
        path: '/vine',
        element: <Vine />
    },
    {
        path: '/soda',
        element: <Soda />
    },
    {
        path: '/ryumka',
        element: <Ryumka />
    },
    {
        path: '/vine',
        element: <Vine />
    },
    {
        path: '/decanter',
        element: <Decanter />
    },
    {
        path: '/baking-dishes',
        element: <BakingDishes />
    },
    {
        path: '/beer',
        element: <Beer />
    },
    {
        path: '/tea',
        element: <Tea />
    },
    {
        path: '/champagne',
        element: <Champagne />
    },
    {
        path: '/others',
        element: <Others />
    },

// ----------soda--------
    {
        path: '/Aquatic41971',
        element: <Aquatic41971 />
    },
    {
        path: '/Valse42294',
        element: <Valse42294/>
    },
    {
        path: '/Casablanca52707',
        element: <Casablanca52707/>
    },
    {
        path: '/Snap41632',
        element: <Snap41632/>
    },
    {
        path: '/Leia420765',
        element: <Leia420765/>
    },
    {
        path: '/Leia420174',
        element: <Leia420174/>
    },
    {
        path: '/Karat52888',
        element: <Karat52888/>
    },
    {
        path: '/Karat52885',
        element: <Karat52885/>
    },
    {
        path: '/Allegra410536',
        element: <Allegra410536/>
    },
    {
        path: '/Allegra420015',
        element: <Allegra420015/>
    },
    {
        path: '/Elysia520015',
        element: <Elysia520015/>
    },
    {
        path: '/Elysia5200014',
        element: <Elysia5200014/>
    },
    {
        path: '/Elysia520004',
        element: <Elysia520004/>
    },
    {
        path: '/Timeless52800',
        element: <Timeless52800/>
    },
    {
        path: '/Timeless52820',
        element: <Timeless52820/>
    },
    {
        path: '/Timeless51790',
        element: <Timeless51790/>
    },
    {
        path: '/Timeless52810',
        element: <Timeless52810/>
    },
    {
        path: '/Sylvana42812',
        element: <Sylvana42812/>
    },
    {
        path: '/Sylvana42415',
        element: <Sylvana42415/>
    },
    {
        path: '/Dance42868',
        element: <Dance42868/>
    },
    {
        path: '/Amorf420224',
        element: <Amorf420224/>
    },
    {
        path: '/Pleasure420103',
        element: <Pleasure420103/>
    },
    {
        path: '/Karat52882',
        element: <Karat52882/>
    },
    {
        path: '/Bistro44872',
        element: <Bistro44872/>
    },
    {
        path: '/Soda52704',
        element: <Soda52704/>
    },
    {
        path: '/Aquatic42975',
        element: <Aquatic42975/>
    },
    {
        path: '/Basic55531',
        element: <Basic55531/>
    },
    {
        path: '/Basic520102',
        element: <Basic520102/>
    },
    {
        path: '/Bingo440511',
        element: <Bingo440511/>
    },
    {
        path: '/Allegra41536',
        element: <Allegra41536/>
    },
    {
        path: '/Kosem42083',
        element: <Kosem42083/>
    },
    {
        path: '/Luna42338',
        element: <Luna42338/>
    },
    {
        path: '/Luna42348',
        element: <Luna42348/>
    },
    {
        path: '/Luna42358',
        element: <Luna42358/>
    },
    {
        path: '/Luna42378',
        element: <Luna42378/>
    },
    {
        path: '/Pleasure420103',
        element: <Pleasure420103/>
    },
    {
        path: '/Side42253',
        element: <Side42253/>
    },
    {
        path: '/Side42884',
        element: <Side42884/>
    },
    {
        path: '/Side42435',
        element: <Side42435/>
    },
    {
        path: '/Tango42949',
        element: <Tango42949/>
    },
    {
        path: '/Valse41536',
        element: <Valse41536/>
    },
    {
        path: '/Valse42949',
        element: <Valse42949/>
    },

// -----------vine-------
    {
        path: '/Imperial44272',
        element: <Imperial44272/>
    },
    {
        path: '/Tulipe44162',
        element: <Tulipe44162/>
    },
    {
        path: '/Enoteca44728',
        element: <Enoteca44728/>
    },
    {
        path: '/Dalida440873',
        element: <Dalida440873/>
    },
    {
        path: '/Allegra440060',
        element: <Allegra440060/>
    },
    {
        path: '/Vintage440184',
        element: <Vintage440184/>
    },
    {
        path: '/Isabella440271',
        element: <Isabella440271/>
    },
    {
        path: '/Isabella440272',
        element: <Isabella440272/>
    },
    {
        path: '/Allegra440265',
        element: <Allegra440265/>
    },
    {
        path: '/Amber440275',
        element: <Amber440275/>
    },
    {
        path: '/Allegra440080',
        element: <Allegra440080/>
    },
    {
        path: '/Vine44248',
        element: <Vine44248/>
    },
    {
        path: '/Bistro44188',
        element: <Bistro44188/>
    },
    {
        path: '/Bistro44411',
        element: <Bistro44411/>
    },
    {
        path: '/Charante44816',
        element: <Charante44816/>
    },
    {
        path: '/Charante440218',
        element: <Charante440218/>
    },
    {
        path: '/Enoteca44248',
        element: <Enoteca44248/>
    },
    {
        path: '/Tulipe44163',
        element: <Tulipe44163/>
    },
    {
        path: '/Karat440148',
        element: <Karat440148/>
    },



// ---------ryumka------
    {
        path: '/Dance42864',
        element: <Dance42864/>
    },
    {
        path: '/Dance42865',
        element: <Dance42865/>
    },
    {
        path: '/Allegra42043',
        element: <Allegra42043/>
    },
    {
        path: '/Basic52837',
        element: <Basic52837/>
    },
    {
        path: '/Side41050',
        element: <Side41050/>
    },
    {
        path: '/Elysia',
        element: <Elysia/>
    },
    {
        path: '/Retro440074',
        element: <Retro440074/>
    },
    {
        path: '/Vintage440182',
        element: <Vintage440182/>
    },
    {
        path: '/Amber440286',
        element: <Amber440286/>
    },
    {
        path: '/Bistro44164',
        element: <Bistro44164/>
    },
    {
        path: '/Bingo42284',
        element: <Bingo42284/>
    },
    {
        path: '/Dalida440142',
        element: <Dalida440142/>
    },
    {
        path: '/Side52837',
        element: <Side52837/>
    },
    {
        path: '/Sylvana42244',
        element: <Sylvana42244/>
    },
    {
        path: '/Luna42043',
        element: <Luna42043/>
    },
    {
        path: '/Elysia520242',
        element: <Elysia520242/>
    },

// -------beer-----

    {
        path: '/Pub55299',
        element: <Pub55299/>
    },
    {
        path: '/Pub55229',
        element: <Pub55229/>
    },
    {
        path: '/Pub55289',
        element: <Pub55289/>
    },
    {
        path: '/Pub42528',
        element: <Pub42528/>
    },
    {
        path: '/Pub42477',
        element: <Pub42477/>
    },
    {
        path: '/Bacchus80113',
        element: <Bacchus80113/>
    },
    {
        path: '/Pub42199',
        element: <Pub42199/>
    },
    {
        path: '/Pub420497',
        element: <Pub420497/>
    },
    {
        path: '/Bistro44417',
        element: <Bistro44417/>
    },
    {
        path: '/Pub55341',
        element: <Pub55341/>
    },
    {
        path: '/Pub55861',
        element: <Pub55861/>
    },

//------------Champagne------------

{
    path: '/Enoteca440161',
    element: <Enoteca440161/>
},
{
    path: '/Bistro44410',
    element: <Bistro44410/>
},
{
    path: '/Tulipe44160',
    element: <Tulipe44160/>
},
{
    path: '/Vintage440283',
    element: <Vintage440283/>
},

// ---------Decanter--------

    {
        path: '/Frigo80122',
        element: <Frigo80122/>
    },
    {
        path: '/Köşem43414',
        element: <Köşem43414/>
    },
    {
        path: '/Bacchus80111',
        element: <Bacchus80111/>
    },
    {
        path: '/Bistro43944',
        element: <Bistro43944/>
    },
    {
        path: '/Frigo80050',
        element: <Frigo80050/>
    },
    {
        path: '/Basic43964',
        element: <Basic43964/>
    },

//----------tea----------
    {
        path: '/Tea97948',
        element: <Tea97948/>
    },
    {
        path: '/Chroma55813',
        element: <Chroma55813/>
    },
    {
        path: '/Tashkent96806',
        element: <Tashkent96806/>
    },
    {
        path: '/TeaCoffee55411',
        element: <TeaCoffee55411/>
    },
    {
        path: '/Timeless42881',
        element: <Timeless42881/>
    },


//---------others------
{
    path: '/Basic55022',
    element: <Basic55022/>
},
{
    path: '/Basic96814',
    element: <Basic96814/>
},
{
    path: '/Aurora95834',
    element: <Aurora95834/>
},
{
    path: '/Bistro54036',
    element: <Bistro54036/>
},
{
    path: '/BasicBlackWhite80030',
    element: <BlackWhite80030/>
},
{
    path: '/Borcam59003',
    element: <Borcam59003/>
},
{
    path: '/Borcam59013',
    element: <Borcam59013/>
},
{
    path: '/Borcam59014',
    element: <Borcam59014/>
},
{
    path: '/Borcam59024',
    element: <Borcam59024/>
},
{
    path: '/Borcam59052',
    element: <Borcam59052/>
},
{
    path: '/Borcam59062',
    element: <Borcam59062/>
},
{
    path: '/Borcam59204',
    element: <Borcam59204/>
},
{
    path: '/Borcam59544',
    element: <Borcam59544/>
},
{
    path: '/Borcam59544scn',
    element: <Borcam59544scn/>
},
{
    path: '/Ceshni97424',
    element: <Ceshni97424/>
},
{
    path: '/Cesni97560',
    element: <Cesni97560/>
},
{
    path: '/Flora43267',
    element: <Flora43267/>
},
{
    path: '/Flora43966',
    element: <Flora43966/>
},
{
    path: '/Homemade80383',
    element: <Homemade80383/>
},
{
    path: '/Homemade80384',
    element: <Homemade80384/>
},
{
    path: '/IceVilley51008',
    element: <IceVilley51008/>
},
{
    path: '/IceVilley41016',
    element: <IceVilley41016/>
},
{
    path: '/IceVilley51068',
    element: <IceVilley51068/>
},
{
    path: '/Kanya54332',
    element: <Kanya54332/>
},
{
    path: '/Karat96326',
    element: <Karat96326/>
},
{
    path: '/KitchenSlim96762',
    element: <KitchenSlim96762/>
},
{
    path: '/KitchenSlim96763',
    element: <KitchenSlim96763/>
},
{
    path: '/Kosem54076',
    element: <Kosem54076/>
},
{
    path: '/Kremlin97624',
    element: <Kremlin97624/>
},
{
    path: '/Kremlin97626',
    element: <Kremlin97626/>
},
{
    path: '/Lacy96136',
    element: <Lacy96136/>
},
{
    path: '/Patissiere95117',
    element: <Patissiere95117/>
},
{
    path: '/Patissiere98259',
    element: <Patissiere98259/>
},
{
    path: '/Patissiere95200',
    element: <Patissiere95200/>
},
{
    path: '/Piknik54646',
    element: <Piknik54646/>
},
{
    path: '/Timeless51759',
    element: <Timeless51759/>
},
{
    path: '/Viva96374',
    element: <Viva96374/>
},
{
    path: '/Village43824',
    element: <Village43824/>
},
{
    path: '/Woody42338',
    element: <Woody42338/>
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
