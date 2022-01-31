import React, {useState} from "react";
import {useEffect} from "react"
import { useRouter } from "next/router";
import tailsJson from "../../data/tails.json";

export default function TailPage() {

  const [response, setResponse] = useState({});
  const router = useRouter();

  useEffect(()=>{

    if(!router.isReady) return <></>;
    const tail = router.query.tail;

    const fetchTails = async () => {
      const response = await GetTail(tail)

      setResponse(response)
    }
    fetchTails()
  }, [router.isReady]);

  if (response) {
    if (response.error) {
      return <div>Tail not found, error: {response.error} </div>;
    } else {
      return (
        <div>
          <h1>Tail data</h1>
          <h4>Title: {response.title}</h4>
          <h4>Description: {response.description}</h4>
        </div>
      );
    }
  }
  <div> No data </div>;

}

const GetTail = async function(tail) {
  try {
    const request = await fetch(`http://localhost:8080/api/rest/tail/${tail}`, {
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "secret",
      },
    });
    const { long_tails } = await request.json();
    if (long_tails.length === 0) {
      return  {error:"no data found for tail: "+tail};
    }

    const file = tailsJson;

    const dataForTail = file.find((e) => e.id === long_tails[0].json_id);

    if (!dataForTail) {
      return  {error:"no data found for tail: "+tail};
    }

    return {
      error: undefined,
      title: dataForTail.title,
      description: dataForTail.description,
    };

  } catch (e) {
    return  {error:e.message}
  }
};