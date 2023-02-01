import HTMLFlipBook from "react-pageflip";

import Page_1 from "./assets/images/1.png";
import Page_2 from "./assets/images/2.png";
import Page_3 from "./assets/images/3.png";
import Page_4 from "./assets/images/4.png";

const App = () => {
  return (
    // @ts-ignore
    <HTMLFlipBook width={600} height={500}>
      <div className="demoPage">
        <img src={Page_1} alt="Page 1" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_2} alt="Page 2" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_3} alt="Page 3" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_4} alt="Page 4" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_1} alt="Page 1" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_2} alt="Page 2" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_3} alt="Page 3" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_4} alt="Page 4" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_1} alt="Page 1" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_2} alt="Page 2" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_3} alt="Page 3" width={"100%"} />
      </div>
      <div className="demoPage">
        <img src={Page_4} alt="Page 4" width={"100%"} />
      </div>
    </HTMLFlipBook>
  );
};

export default App;
