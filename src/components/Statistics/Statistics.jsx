import PropTypes from 'prop-types';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && '<h2 className={css.title}>Upload stats</h2>'}
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li className={css.item} key={stat.id}>
              <StatisticsCard item={stat} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
