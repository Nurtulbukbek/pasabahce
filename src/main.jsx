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

// ----------beer--------
import Pub55299 from './catalogFilesPhotos/beerPhotos/Pub5529.jsx'
import Pub55229 from './catalogFilesPhotos/beerPhotos/Pub55229.jsx'
import Pub55289 from './catalogFilesPhotos/beerPhotos/Pub55289.jsx'
import Pub42528 from './catalogFilesPhotos/beerPhotos/Pub42528.jsx'
import Pub42477 from './catalogFilesPhotos/beerPhotos/Pub42477.jsx'
import Bacchus80113 from './catalogFilesPhotos/beerPhotos/Bacchus80113.jsx'

// ---------Decanter---------
import Frigo80122 from './catalogFilesPhotos/DecanterPhotos/Frigo80122.jsx'
import Köşem43414 from './catalogFilesPhotos/DecanterPhotos/Köşem43414.jsx'
import Bacchus80111 from './catalogFilesPhotos/DecanterPhotos/Bacchus80111.jsx'
import Bistro43944 from './catalogFilesPhotos/DecanterPhotos/Bistro43944.jsx'
import Frigo80050 from './catalogFilesPhotos/DecanterPhotos/Frigo80050.jsx'
import Basic43964 from './catalogFilesPhotos/DecanterPhotos/Basic43964.jsx'

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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
