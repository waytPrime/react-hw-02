export default function FeedBack({ good, bad, neutral, total, positive }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive:{positive}%</p>
    </>
  );
}
