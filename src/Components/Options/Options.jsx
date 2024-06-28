export default function Options({
  fnUpdater,
  fnResetFeedBack,
  isResetVisible,
}) {
  return (
    <>
      <button
        onClick={() => {
          fnUpdater("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          fnUpdater("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          fnUpdater("bad");
        }}
      >
        Bad
      </button>
      {!isResetVisible && <button onClick={fnResetFeedBack}>Reset</button>}
    </>
  );
}
