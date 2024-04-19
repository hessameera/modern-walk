import React from 'react'

function page({ param }: any) {

    console.log(param);

    return (
        <div>
            Catch All routes (404 - page not found)

        </div>
    )
}

export default page
