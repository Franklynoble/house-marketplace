import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import{
     collection,
     getDocs,
     where,
     query,
     orderBy,
     limit,
     startAfter,
} from 'firebase/firestore'

import {db} from '../firebase.config'
import{toast} from 'react-toastify'
import Spinner from '../components/Spinner'



const Category = () => {

const [listings , setListings] = useState(null)

const[loading, setLoading] = useState(true)

const params = useParams()

useEffect (() => {  

     const fetchListings = async () => {
          try {
               // Get reference
               const listingsRef = collection(db, 'listings')


               //create query
               const q = query(
                    listingsRef, where('type', '==', params.categoryName),
                    orderBy('timestamp', 'desc'), limit(10)
               )

               //execute query
               
               const querySnap = await getDocs(q)
             let listings = []
              querySnap.forEach((doc) => {
               return listings.push({
                    id: doc.id,
                    data: doc.data()
               })
             })
                
             setListings(listings)
             setLoading(false)
          }catch (err) {
               toast.error('could not get listings ')

          }
         
     }
     fetchListings()
}, [params.categoryName])

     return ( 
    <div className="category">
     <header>
          <p className="pageHeader">
               {params.categoryName === 'rent'
               ? 'Places for rent': 'Places for sale'}
          </p>
     </header>
      {loading ? (<Spinner />): listings && listings.length > 0? (
          <>
          <main>
         <ul className="categoryListings" >
           {listings.map((listing) =>(

           <h3>{listing.data.name}</h3>

           ))}
         </ul>

          </main>
          </>
      ): (
          <p>No lsitings for ${params.categoryName}</p>
      )}
      

    </div>


      );
}
 
export default Category;