import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./singleComment";
import UserCard from "./userCard";
import blank from "./img/blank.webp";
import blank2 from "./img/blank2.webp";
import blank3 from "./img/blank3.jpg";
//import createRoot from "react-dom/client"

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>
          <h1>Hi there!</h1>
        </div>
      </UserCard>
      <UserCard>
        <SingleComment
          autor="Alex"
          date="5:00pm"
          text="Its amazing!"
          picture={blank}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          autor="Jane"
          date="6:00pm"
          text="Its amazing!"
          picture={blank2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          autor="John"
          date="7:00pm"
          text="Its amazing!"
          picture={blank3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
