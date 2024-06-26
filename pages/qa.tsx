import { useState, useEffect } from 'react';
import "@Src/app/globals.css"
import { useDispatch } from 'react-redux';
import { fetchConversations } from '@Actions/conversation';
import LeftPane from '@Comp/leftPane';
import RightPane from '@Comp/rightPane';

export default function Home() {
  const [currentConv, setCurrConv] = useState<string | undefined>();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchConversations(dispatch)
  }, [])

  const convHook = { currentConv, setCurrConv }
  
  return (
    <main className="flex min-h-screen flex-row">
      <LeftPane {...convHook}/>
      <RightPane {...convHook}/>
    </main>
  );
}

