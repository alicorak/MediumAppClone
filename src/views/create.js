import React from 'react'
import Box from '../components/box';
import ContentGeneral from "../components/content/content-general"
function CreateView() {
    return (
        <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           
            <ContentGeneral></ContentGeneral>
        </Box>
    )
}
 export default CreateView;