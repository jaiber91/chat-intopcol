import React from "react";
import "../styles/chat.css";
import { ImboxPeople } from "../components/ImboxPeople";
import { Messages } from "../components/Messages";
import { ChatSelect } from "../components/ChatSelect";

export const ChatPages = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        
        
        <ImboxPeople />
        {
            (true)
                ?<Messages />
                :<ChatSelect/>
        }
      </div>
    </div>
  );
};
