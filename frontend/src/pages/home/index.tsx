import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Navbar from "~/components/navbar";
import useCommits from "~/hooks/use_commits";
import useGetReq from "~/hooks/use_fetch";
import useUser from "~/hooks/use_user";



export default function Projects(){
    //const [loading ,setLoading] = useState(true)
   // const [user ,setUser] =useState<any>(null)
    const router = useRouter();
    const [user ,loading] = useUser()

    //const [commits ,lc] = useCommits({maintainer:"JakobMckenna",project:"NoName"})
    const getCommits = async ()=>{
        const res = await axios.get("http://localhost:5000/github/commits/JakobMckenna/NoName")
        return res.data
    }
   
    useEffect(
        ()=>{
            //console.log(commits)
            if(!user){
                // go back and signin
               // router.push("/")
              }
              //console.log(loading)
              //console.log(user)
             

        },[loading,user]
    )
    return(
        <div>
            <Head>
                <title>DevDiaries | user</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!loading && (<Navbar userName={user?.email} />)}
        </div>
    )
} 