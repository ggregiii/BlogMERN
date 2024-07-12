export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg"
          alt="lawnmower"
        />
      </div>
      <div className="text">
        <h2>Full-house battery backup coming later this year</h2>
        <p className="info">
          <a className="author">Dawid Paszko</a>
          <time>2024-07-10, 18:23:88</time>
        </p>
        <p className="summary">
          Today at its special launch event, home backup power giant EcoFlow
          launched a flurry of new products, including a “Whole-Home Backup
          Power Solution.”
        </p>
      </div>
    </div>
  );
}
