import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-notify">
        <div className="notification"> Loading...</div>
        <div className="go_page">
          <a href="/">&#60;&#60; Go to the page</a>
        </div>
      </div>
    </div>
  );
};

export default Loading;
