import styles from "../../styles/about.module.css";
import { icons } from "../../utils/about/icons";

export const AboutMarketProblem = ({ icon, title, description, solution, color }) => {
    return (
        <div
            style={{ borderLeft: `4px solid ${color}` }}
            className={styles.about_problem_wrapper}
        >
            <div className={styles.about_problem_icon_wrapper}>
                { icon }
            </div>
            <div>
                <div>
                    <div className={styles.about_problem_info_wrapper}>
                        <h3 className={styles.about_problem_title}>{ title }</h3>
                        <p className={styles.about_problem_description}>{ description }</p>
                    </div>
                    <div className={styles.about_problem_solution}>
                        <div className={styles.about_problem_solution_icon_wrapper}>
                            { icons.solutionRow }
                        </div>
                        <div>
                            <p className={styles.about_problem_solution}>Решение: { solution }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}