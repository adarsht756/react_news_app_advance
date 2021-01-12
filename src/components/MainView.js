import React from 'react'
import NewsCard from './NewsCard'
import { UserConsumer } from './userContext'
function MainView() {
    return (
        <UserConsumer>
            {
                news => {
                    return (
                        <div className="bg-gray-50 flex flex-wrap w-9/12 h-full fixed right-0 overflow-y-scroll ">
                            {
                                news.map((item, index) => {
                                    return <NewsCard key={index} details={item} />
                                })
                            }
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default MainView