import * as ActionTypes from '../constants/ActionTypes'
import axios from 'axios';



export const actionCreators = {
    saveContactDetails: (formData) => async (dispatch, getState) => {


        dispatch({ type: ActionTypes.SAVE_CONTACT, data: formData })


        
    
      

        const url = `api/Contacts/SaveContacts`
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", 
            headers: {
                "Content-Type": "application/json",
                
            },
            redirect: "follow", 
            referrer: "no-referrer", 
            body: formData,
           
        })
        console.log('testaction', response)
        const forecasts = await response.json();


    }
};


// function saveContactDetails(formData) {
//     return async (dispatch, getState) => {
//         dispatch({

//             type: ActionTypes.SAVE_CONTACT,
//             data: formData
//         })

//         const url = `api/Contacts/SaveContacts`
//         const response = await fetch(url);
//         const forecasts = await response.json();

//         let postInfo = {
//             verb: "POST",
//             body:formData
//         }

        // axios.post('/Contacts/SaveContacts',{
        //     method: 'post',
        //     url: '',
        //     data: {
        //               project_id: values.projectId,
        //               id: values.selectedProjectId,
        //                role: values.userRole,
        //            },
        //     headers: {
        //     'content-type': `multipart/form-data; boundary=${form._boundary}`,
        //              },

        //             })
        //     .catch(error=> {
        //            console.log('error', error);
        //     }
        //  );

        // return axios.post('/api/Contacts/SaveContacts', postInfo)
        //     .then(function (response) {
        //         console.log('Savecontacts after then', response)
        //     })





//     }
// }

    // export default saveContactDetails;