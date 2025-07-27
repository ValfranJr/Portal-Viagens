import styles from "./Title.module.css";

type Props = {
    title: string;
};

export default function Title({title}: Props) {
    return (
        <h2 className={styles.title}>{title}</h2>
    );
}