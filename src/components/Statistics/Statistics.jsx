import PropTypes from 'prop-types';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && '<h2 className="title">Upload stats</h2>'}
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className="item" key={stat.id}>
              <StatisticsCard item={stat} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};