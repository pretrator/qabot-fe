"use client";
import { useState, useEffect } from 'react';
import LeftPane from '@Comp/leftPane';
import RightPane from '@Comp/rightPane';
import "@Src/app/globals.css"
import { axios } from '@Src/utils';
import { FETCH_CONVO } from '@Src/urls';
import { useDispatch } from 'react-redux';
import { SET_CONVERSATIONS } from '@Src/actionsType';

export default function Home(props) {
  console.log("HOME PROPS", props)
  const [currentConv, setCurrConv] = useState();
  const [allconvList, setAllConv] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(FETCH_CONVO)
      .then((res) => {
        dispatch({ type: SET_CONVERSATIONS, data: res.data })
        setAllConv(res.data);
      })
  }, [])
  
  

  return (
    <main className="flex min-h-screen flex-row">
      <LeftPane setCurrConv={setCurrConv} allconvList={allconvList} currentConv={currentConv}/>
      <RightPane currentConv={currentConv}/>
    </main>
  );
}

