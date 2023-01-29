import {  useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard(){ 
  const { status  } = useSession();
  const router = useRouter(); 
   
 
      useEffect(()=>{      
        if( status === "unauthenticated")  
        router.push('/') 

      }, [status ]); 
 
 
 if( status === "authenticated") {
    return(
    <div>

        
        <div><br />This is the dasboard</div> 
    
    </div> 
    )
  }
}