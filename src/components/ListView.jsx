import React from 'react'
import { Todo } from './Todo'
import { InDesign } from './InDesign'
import { InReview } from './InReview'

const ListView = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Todo/>
            <InDesign/>
            <InReview/>
        </div>

    )
}

export default ListView
