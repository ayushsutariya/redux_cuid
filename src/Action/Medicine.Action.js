import { BASE_URL } from "../baseUrl";
import { Delete_Medicines, Edit_Medicines, Get_Medicines, Set_Medicines } from "../common/api/medicine.api";

export const MedicineData  = (dispatch) => {
  try {
    dispatch(loading_medicines())

    Get_Medicines()
    // .then((data) => console.log(data.data))
    .then((data) =>
          dispatch({ type: 'GET_MEDICINES', payload: data.data })
        )
        .catch( error => dispatch(error_medicines(error.message)));
    // setTimeout(function () {
    //   return fetch(BASE_URL + "medicines")
    //     .then(
    //       (response) => {
    //         if (response.ok) {
    //           return response;
    //         } else {
    //           var error = new Error(
    //             "Error " + response.status + ": " + response.statusText
    //           );
    //           error.response = response;
    //           throw error;
    //         }
    //       },
    //       (error) => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       }
    //     )
    //     .then((response) => response.json())
    //     .then((medicines) =>
    //       dispatch({ type: 'GET_MEDICINES', payload: medicines })
    //     )
    //     .catch( error => dispatch(error_medicines(error.message)));
    // }, 2000);
  } catch (error) {
    dispatch(error_medicines(error.message))
    console.log(error);
  }
};

export const Add_MedicineData = (data) => (dispatch) => {
  try {

    Set_Medicines(data)
    // .then((data) => console.log(data))
    // .then((response) => response.json(data))
    .then((data) =>
            dispatch({ type: 'ADD_MEDICINE', payload: data.data })
          )
          .catch( error => dispatch(error_medicines(error.message)));
          // .then((response) => response.json())
      // return fetch(BASE_URL + "medicines" ,{
      //   method : 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then(
      //     (response) => {
      //       if (response.ok) {
      //         return response;
      //       } else {
      //         var error = new Error(
      //           "Error " + response.status + ": " + response.statusText
      //         );
      //         error.response = response;
      //         throw error;
      //       }
      //     },
      //     (error) => {
      //       var errmess = new Error(error.message);
      //       throw errmess;
      //     }
      //   )
      //   .then((response) => response.json())
      //   .then((medicines) =>
      //     dispatch({ type: 'ADD_MEDICINE', payload: medicines })
      //   )
      //   .catch( error => dispatch(error_medicines(error.message)));
  } catch (error) {
    dispatch(error_medicines(error.message))
    console.log(error);
  }
}

export const Edit_MedicineData = (data) => (dispatch) => {
  try {
    Edit_Medicines(data)
    .then((data) =>
        dispatch({ type: 'EDIT_MEDICINE', payload: data.data })
      )
      .catch( error => dispatch(error_medicines(error.message)));
    // return fetch(BASE_URL + "medicines/" + data.id,{
    //   method : 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(
    //     (response) => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error(
    //           "Error " + response.status + ": " + response.statusText
    //         );
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //     (error) => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     }
    //   )
    //   .then((response) => response.json())
    //   .then((medicines) =>
    //     dispatch({ type: 'EDIT_MEDICINE', payload: medicines })
    //   )
    //   .catch( error => dispatch(error_medicines(error.message)));
} catch (error) {
  dispatch(error_medicines(error.message))
  console.log(error);
}
}

export const Delete_MedicineData = (id) => (dispatch) => {
  try {
    Delete_Medicines(id)
    .then(dispatch({ type: 'DELETE_MEDICINE', payload: id }))
        .catch( error => dispatch(error_medicines(error.message)));
      //    return fetch(BASE_URL + "medicines/" + id ,{
      //   method : 'DELETE'
      // })
      //   .then(
      //     (response) => {
      //       if (response.ok) {
      //         return response;
      //       } else {
      //         var error = new Error(
      //           "Error " + response.status + ": " + response.statusText
      //         );
      //         error.response = response;
      //         throw error;
      //       }
      //     },
      //     (error) => {
      //       var errmess = new Error(error.message);
      //       throw errmess;
      //     }
      //   )
      //   .then((response) => response.json())
      //   .then((medicines) =>
      //     dispatch({ type: 'DELETE_MEDICINE', payload: id })
      //   )
      //   .catch( error => dispatch(error_medicines(error.message)));
  } catch (error) {
    dispatch(error_medicines(error.message))
    console.log(error);
  }
}

export const error_medicines = (errors) => (dispatch) => {
  dispatch({ type: 'ERROR_MEDICINE' , payload: errors})  
}

export const loading_medicines = () => (dispatch) => {
  dispatch({type: 'LOADING_MEDICINE'})
}

export default MedicineData;