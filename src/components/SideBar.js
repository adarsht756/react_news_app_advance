import React, { useRef } from 'react'
import SelectOpt from './SelectOpt'

const countries = [
    { key: 'Argenina', val: 'ar' }, { key: 'Australia', val: 'au' },
    { key: 'India', val: 'in' }, { key: 'Honk Kong', val: 'hk' },
    { key: 'Hungary', val: 'hu' }, { key: 'China', val: 'cn' },
    { key: 'Egypt', val: 'eg' }, { key: 'Japan', val: 'jp' },
    { key: 'Poland', val: 'pl' }, { key: 'Romania', val: 'ro' }
]
const categories = [
    { key: 'Entertainment', val: 'entertainment' }, { key: 'General', val: 'general' },
    { key: 'Health', val: 'health' }, { key: 'Science', val: 'science' },
    { key: 'Sports', val: 'sports' }, { key: 'Technology', val: 'technology' }
]

function SideBar({ updateNews }) {

    const cont = useRef(null)
    const cat = useRef(null)

    return (
        <div className="w-3/12 bg-gray-200 py-10 mainMenu text-center fixed">
            <div className="my-3">
                <span className="text-xl shadow-lg border-gray-500 px-6 py-3 rounded">Countries</span> <br />
                <SelectOpt ref={cont} list={countries} />
            </div>
            <div className="my-3">
                <span className="text-xl shadow-lg border-gray-500 px-6 py-3 rounded">Categories</span> <br />
                <SelectOpt ref={cat} list={categories} />
            </div>
            <button className="bg-black bg-opacity-80 rounded px-4 py-2 text-gray-200" onClick={() => updateNews(cont.current.value, cat.current.value)}>Get News</button>
        </div>
    )
}

export default SideBar