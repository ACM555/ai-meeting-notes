import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/features', label: '技能' },
    { path: '/demo', label: '演示' },
    { path: '/help', label: '联系' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="navigation"
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">赵英凯</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="nav-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/demo" className="nav-cta">
            作品展示
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
