import "server-only";

import { defineLive } from "next-sanity";
import {client} from "@/sanity/lib/client";

// set your viewer token(used to read data from database)
const token = process.env.SANITY_API_READ_TOKEN;
if(!token){
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

export const{sanityFetch, SanityLive} = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions:{
    revalidate:0,
  },
})