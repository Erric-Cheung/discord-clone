import classes from "./DirectMessagesHeader.module.css";

const DirectMessagesHeader = () => {
  return (
    <h2 className={classes["header-container"]}>
      <span className={classes["header-text"]}>DIRECT MESSAGES</span>
      <div>
        <svg
          x="0"
          y="0"
          className={classes["header-button"]}
          aria-hidden="true"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 18 18"
        >
          <polygon
            fill="currentColor"
            points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
          ></polygon>
        </svg>
      </div>
    </h2>
  );
};

export default DirectMessagesHeader;
