const TvShow = (props) => {
  return (
    <div className="container-show">
      <div className="container-time">{props.time}</div>
      <div className="container-image">
        <img src={props.image} />
      </div>
      <div className="container-infos">
        <div className="container-infos-up">{props.title}</div>
        <div className="container-infos-middle">{props.type}</div>
        <div className="container-infos-down">
          {props.duration}
          <span>{props.direct && "• Direct"}</span>
        </div>
      </div>
    </div>
  );
};
export default TvShow;
