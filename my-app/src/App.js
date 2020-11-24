import "./App.css";
import QuestionList from "./QuestionList.js";
import box from "./illustration-box-desktop.svg";
import woman from "./illustration-woman-online-desktop.svg";
import bg from "./bg-pattern-desktop.svg";
function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="card">
          <div>
            <img src={woman} className="left" />
            <img src={box} className="box" />
            <img src={bg} className="bg" />
          </div>
          <div>
            <div className="right">
              <h1>FAQ</h1>
              <QuestionList
                text="How many team members can I invite?"
                answer="Answer for Q1"
              />
              <QuestionList
                text="What is the maximum file upload size?"
                answer="No more than 2GB. All files in your account must fit your allotted storage space"
              />
              <QuestionList
                text="How do I reset my password?"
                answer="Answer for Q3"
              />
              <QuestionList
                text="Can I cancel my subscription?"
                answer="Answer for Q4"
              />
              <QuestionList
                text="Do you provide additional support?"
                answer="Answer for Q5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
