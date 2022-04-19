import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import "../Question/question.css";
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
function QuestionDetail({ question }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/answer/${question.question_id}`);
  };
  return (


    <div className="header_question">
      <div className="question_user" style={{ textAlign: "center" }}>
        <FaUserCircle style={{ width: "85%", height: "55%", color: "grey" }} />
        <div>{question ? question.user_name + "" : "New User"} </div>
      </div>
      <div className="question_title" onClick={handleClick}>
        <div>{question ? question.title : "New Title"}</div>
        <div >
          < FaGreaterThan style={{ color: "black" }} />
        </div>
      </div>
    </div>

  );
}

export default QuestionDetail;
{/* <div class="s-post-summary--stats-item s-post-summary--stats-item__emphasized" title="Score of 0">
  <span class="s-post-summary--stats-item-number">0</span>
  <span class="s-post-summary--stats-item-unit">votes</span>
</div> */}