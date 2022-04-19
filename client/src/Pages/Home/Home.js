import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import QuestionDetail from "../Question/QuestionDetail";
import Axios from "../../axios";
import "./home.css"
// import Search from "./Search"

const Home = ({ question }) => {
  const [search, setSearcher] = useState('');
  const [userData, setUserData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const axios = Axios();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (!userData.user) {
      navigate("/login");
    } else {
      loadQuestions();
    }
  }, [userData.user]);

  async function loadQuestions() {
    const response = await axios.get(
      "/api/question/getquestions",
      userData.config
    );
    setQuestions(response.data?.data);
  }

  const handleClick = () => {
    navigate("/newquestion");
  };

  useEffect(() => {
    setFilterData(
      questions.filter((question) => question.title.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, questions])


  return (
    <section className=" container">
      <div className="header_row">
        <button className="blue_button" onClick={handleClick}>
          Ask Question
        </button>

        <h3 className="header_border">
          Welcome: {userData.user?.display_name}
        </h3>

      </div>
      <div className="search" style={{ borderBottom: '0.01px solid', paddingBottom: '13px', marginBottom: '10px' }}>

        <h4>Questions</h4>
        <input className="search_bar"
          type="text"
          placeholder="Search..."
          onChange={(e) => { setSearcher(e.target.value) }} />
      </div>
      <div>
        {filterData.length === 0 ?
          <div>No Result found</div>
          : filterData.map((val) => {
            return <QuestionDetail question={val} key={val.title} />

          })
        }
      </div>
    </section >
  );
};

export default Home;
