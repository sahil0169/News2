"use client"
import React from 'react'
import { useState } from 'react'
import { useSearchParams} from 'next/navigation'
import Apicall from "components/apicall"

async function Api() {
  const searchParams = useSearchParams();
  let catFilter="general"
  if (searchParams.get("category") != null) {
    catFilter = searchParams.get("category")
  }
  
  
  const data= await Apicall(catFilter)
  return ( {data} )
}

export default Api