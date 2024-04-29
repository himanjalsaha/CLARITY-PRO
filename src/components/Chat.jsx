import React, { useState ,useEffect } from 'react'
import {onSnapshot,query,collection} from 'firebase/firestore'
import { db } from '../Firebase/firebase';
import { UserAuth } from '../context/AuthContext';
import { getDoc, setDoc, doc, serverTimestamp,  orderBy } from 'firebase/firestore';

const Chat = () => {
  const {currentuser} = UserAuth()
  const [users,setUsers]  = useState([])
  const [details , setDetails] = useState({})
  const [sentMessage, setSentMessage] = useState('');
  const [showmessage, setShowmessage] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'messages'), orderBy('time', 'desc')), (snapshot) => {
      const updatedMessages = [];
      snapshot.forEach((doc) => {
        updatedMessages.push({ id: doc.id, ...doc.data() });
      });
      setShowmessage(updatedMessages.reverse()); // Reverse the order to display oldest messages first
      console.log(updatedMessages);
    });

    return unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault(); 
    const messageText = sentMessage;
  console.log(messageText);
    if (!sentMessage.trim()) {
      setError('Message cannot be empty');
      return;
    }

    try {
      // Save message to database
      const messageRef = doc(db, "messages", currentuser.uid + details.uid);
      const messageDoc = await getDoc(messageRef);
      let existingMessages = [];
      
      if (messageDoc.exists()) {
        existingMessages = messageDoc.data().text;
      }
      
      const updatedMessages = [...existingMessages, sentMessage]; // Add the new message to existing messages array
  
      await setDoc(messageRef, {
        senderName: currentuser.displayName,
        receiverName: details.username,
        text: updatedMessages, // Set the text field as updated messages array
        senderId: currentuser.uid,
        receiverId: details.uid,
        time: serverTimestamp(),
      });
  
      // Clear input field after sending message
      setSentMessage('');
      setError('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

      
  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'users')), (snapshot) => {
      const updatedUsers = [];
      snapshot.forEach((doc) => {
        updatedUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(updatedUsers);
    });

    return unsubscribe;
  }, []);

  const getdetails =  (item) => {
    console.log('Clicked user:', item);
    setDetails(item);
  }
  
    useEffect(() => {
    console.log('selected user:' +details); // Log details whenever it changes
  }, [details]);

  return (


    <div className='w-full bg-neutral-800'>

      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col p-1 w-80 bg-neutral-800 text-white border-r-2 border-white flex-shrink-0 ">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div
                className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 font-bold text-2xl">Claritypro</div>
            </div>
           
            <div className="flex flex-col mt-8 bg-neutral-700 p-2 h-full rounded">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold text-lg">Active Conversations</span>
                <span
                  className="flex items-center justify-center bg-neutral-900 p-3 h-4 w-4 rounded-full"
                >4</span
                >
              </div>
              {users.filter(user => user.uid !== currentuser.uid).map((user) => (
             
                  <button  key={user.id} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" onClick={() => getdetails(user)}>
                    <img src={user.photourl} alt="" className='w-8 h-8 rounded-full' />
                    <div className="ml-2 text-sm font-semibold">{user.username}</div>
                  </button>
                ))}
            
          
            </div>
          </div>

          {details  ? (
              <div className="flex flex-col h-full w-full p-6">
              <div className='text-white flex items-center gap-2  '><img src={details.photourl} className='w-8 h-8 rounded-full' alt="" /><text>{details.username}</text></div>
  
              
              <div
                className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-neutral-800 h-full p-4"
              >
  
                
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                  <div className="flex flex-col h-full  ">
                    <div className="grid grid-cols-12 gap-y-2 ">
                   
   
        
         
          
  
  
          
                  
                   
                   
          {showmessage.filter(message => 
              (message.senderId === currentuser.uid && message.receiverId === details.uid) ||
              (message.senderId === details.uid && message.receiverId === currentuser.uid)
            ).map((message) => (
  <div key={message.id} className="col-start-6 col-end-13  p-3 rounded-lg my-10">
          <div className={`flex items-center justify-start ${message.senderId === currentuser.uid ? 'flex-end' : 'flex-start'}`}>
      <div className="relative m-2 mr-3 text-sm  py-2 px-4 ">
        {message.text.map((text, index) => (
          <div key={message.id} className='flex flex-row items-center'>     
                    <div className={`m-2  shadow  p-2 rounded-lg ${message.senderId === currentuser.uid ? 'bg-blue-700' : 'bg-white'}` } key={index}>{text}</div>

          </div>
        ))}
      </div>
    </div>
  </div>
))}

                  
                      <div className="col-start-1 col-end-8 p-3 rounded-lg">
                     
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-row items-center h-16 rounded-xl bg-neutral-800 w-full px-4"
                >
                  <div>
                    <button
                      className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex-grow ml-4">
                    <div className="relative w-full">
                    <form action="" onSubmit={sendMessage}>
    <div className="flex w-full">
      <input
      placeholder='enter a message..........'
        value={sentMessage}
        onChange={(e) => setSentMessage(e.target.value)}
        type="text"
        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-xl">
        Send
      </button>
    </div>
  </form>
  
                   
                    </div>
                  </div>
        
                </div>
              </div>
            </div>
          ):(<div className='flex justify-center items-center h-full w-full text-white'>select a Conversation</div>)}


        
        </div>
      </div>

    </div>
  )
};

export default Chat