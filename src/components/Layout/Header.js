import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        < HeaderCartButton onClick={props.onShowCard}/>
      </header>
      <div className={styles["main-image"]}>
        <img alt="delicious food" src={mealsImg} />
      </div>
    </>
  );
};

export default Header;
