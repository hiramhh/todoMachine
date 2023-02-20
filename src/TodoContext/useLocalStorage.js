import React from 'react';



  // COUSTUM HOOK QUE CONTIENE TODA LA LOGICA PARA TRAER INFORMACION DE LOCAL STORGE Y CONSEGUIR
  //QUE EL ESTADO SIEMORE RECIBA LA VERSION MAS ACTUALIZADA DE LOS ELEMENTOS DEL LOCAL STORAGE 
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
      
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
      
          setItem (parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000);
    }, []);
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem (itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
  
    return {
      item,
      saveItem,
      loading,
      error,
    }  ;
  }
  

  export {useLocalStorage};