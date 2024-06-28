import { useEffect, useState } from "react";
import Description from "./Components/Description/Description";
import Options from "./Components/Options/Options";
import FeedBack from "./Components/FeedBack/FeedBack";
import "./App.css";

function App() {
  const [variant, setVariant] = useState(() => {
    const savedFeedBack = window.localStorage.getItem("saved-variant");
    if (savedFeedBack) {
      return JSON.parse(savedFeedBack);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("saved-variant", JSON.stringify(variant));
  }, [variant]);

  const totalFeedback = variant.good + variant.neutral + variant.bad;
  const isHaveFeedBack =
    variant.bad === 0 && variant.good === 0 && variant.neutral === 0;
  const updateFeedback = (feedbackType) => {
    setVariant({
      ...variant,
      [feedbackType]: variant[feedbackType] + 1,
    });
  };
  const feedBackReset = () => {
    setVariant({ good: 0, neutral: 0, bad: 0 });
  };
  const totalPositiveFeedBack = Math.round(
    ((variant.good + variant.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Description />
      <Options
        fnResetFeedBack={feedBackReset}
        fnUpdater={updateFeedback}
        isResetVisible={isHaveFeedBack}
      />
      {isHaveFeedBack ? (
        <p>No feddback yet</p>
      ) : (
        <FeedBack
          total={totalFeedback}
          good={variant.good}
          bad={variant.bad}
          neutral={variant.neutral}
          positive={totalPositiveFeedBack}
        />
      )}
    </>
  );
}

export default App;
