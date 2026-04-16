import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollProgress from '../hooks/useScrollProgress';
import './Footer.css';

const Footer = () => {
  const scrollProgress = useScrollProgress();

  return (
    <footer className="footer">
      <div className="footer-progress" style={{ width: `${scrollProgress * 100}%` }} />

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">赵英凯</span>
            </div>
            <p className="footer-desc">
              Vibe Coding · Agent 开发 · OPC 创业
              <br />
              热爱技术，在实践中成长
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>导航</h4>
              <Link to="/">首页</Link>
              <Link to="/features">技能展示</Link>
              <Link to="/demo">作品演示</Link>
            </div>
            <div className="footer-column">
              <h4>联系</h4>
              <Link to="/help">联系方式</Link>
              <a href="tel:13730876848">电话: 13730876848</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 赵英凯 · 用代码创造价值</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
