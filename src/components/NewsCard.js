import React from 'react'

function NewsCard({ details }) {
    console.log(details.content)
    return (
        <div className="w-80 flex flex-col mx-5 my-8">
            <a href={details.url} target="_blank">
                <img className="w-full rounded-t h-56 object-contain" src={details.urlToImage} />
                <span className="text-base mt-4 font-semibold">{details.description}</span>
            </a>
        </div>
    )
}

export default React.memo(NewsCard)
