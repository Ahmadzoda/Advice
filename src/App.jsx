import "./App.css";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import Switcher from "./Switcher";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdvice } from "./advices/advice";


function App() {
  const advice = useSelector(({ advice }) => advice.advice);
  let dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <div className="content dark:bg-[black]">
          <div className="light-content flex justify-center pt-[150px]">
            <div className="junior-content dark:bg-[#1E1E1E]">
              <div className="div-switcher flex justify-center pt-[20px]">
                <Switcher />
              </div>
              <div className="content-title flex justify-center">
                <h2>ADVICE {advice?.id ? advice.id : "#117"}</h2>
              </div>
              <div className="content-text flex justify-center pt-[10px]">
                <h1>
                  {advice?.advice
                    ? advice?.advice
                    : "It is easy to sit up and take notice, what's difficult is getting up and taking action."}
                </h1>
              </div>

              <div className="div-line flex justify-center pt-[20px] gap-[10px]">
                <div className="line-one pt-[10px] flex justify-center ">
                  <div className="one"></div>
                </div>
                <div className="line-two flex justify-center">
                  <div className="two"></div>
                </div>
                <div className="line-two flex justify-center">
                  <div className="two"></div>
                </div>
                <div className="line-one pt-[10px] flex justify-center">
                  <div className="one"></div>
                </div>
              </div>

              <div className="green-div flex justify-center pt-[30px]">
                <div className="green">
                  <div className="div-green-button pt-[10px] flex justify-center">
                    <button onClick={() => dispatch(getAdvice())}>
                      <QrCode2Icon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
