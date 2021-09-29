import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious food to you!</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a esetting, remaining
        essentially unchanged.
      </p>
      <p>
        a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
      </p>
    </section>
  );
};

export default MealsSummary;
