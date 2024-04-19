import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      if (currentUser && currentUser.uid) {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });

        return () => {
          unsub();
        };
      }
    };

    getChats();
  }, [currentUser]);

  const handleSelect = (userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  return (
    <div className="chats">
      {chats &&
        Object.entries(chats)
          .sort((a, b) => b[1].date - a[1].date)
          .map(([chatId, chatData]) => (
            <div
              className="userChat"
              key={chatId}
              onClick={() => handleSelect(chatData.userInfo)}
            >
              {chatData.userInfo && (
                <>
                  <img src={chatData.userInfo.photoURL} alt="" />
                  <div className="userChatInfo">
                    <span>{chatData.userInfo.displayName}</span>
                    <p>{chatData.lastMessage?.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
    </div>
  );
};

export default Chats;
