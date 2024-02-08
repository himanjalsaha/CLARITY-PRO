import React from 'react'
import { Todo } from './Todo'
import { InDesign } from './InDesign'
import { InReview } from './InReview'

const ListView = () => {
    return (
        <div>
            <div>ListView</div>
            <Todo/>
            <InDesign/>
            <InReview/>
        </div>

    )
}

export default ListView