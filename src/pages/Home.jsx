import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedCard } from '../components/MotionWrapper';
import useInView from '../hooks/useInView';
import avatarImg from '../assets/avatar.jpg';
import './Home.css';

const Home = () => {
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const features = [
    { icon: '🤖', title: 'Vibe Coding + Agent 开发', desc: '专注智能体开发，探索 AI 编程前沿技术' },
    { icon: '🎯', title: 'OPC 创业实践', desc: '跟进本地政策与前沿技术，将创新落地为产品' },
    { icon: '🏫', title: '学术研究与实践', desc: '腾讯开悟多模态赛道、大创项目、C4 大赛多线并行' },
    { icon: '👥', title: '团队负责人', desc: '担任"虎牙卫"课题组本科生负责人，带领12人团队' },
  ];

  return (
    <div className="home-page">
      <section className="hero-section hero-about">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="avatar-container">
            <img src={avatarImg} alt="赵英凯" className="avatar-img" />
          </div>
          <h1 className="main-title">
            你好，我是
            <br />
            <span className="highlight">赵英凯</span>
          </h1>
          <p className="subtitle">大一本科生 · 四川成都 · Vibe Coding & Agent 开发爱好者</p>
          <div className="about-intro">
            <p>
              我是一名 <strong>Vibe Coding + Agent 开发学习爱好者</strong>，目标是实现
              <strong>OPC创业</strong>。对于前沿技术和本地政策持续跟进，例如 Claude Code、Codex、
              Harness 工程、成都天府软件园 OPC 入驻政策要求等。
            </p>
            <p>
              目前参加了<strong>腾讯开悟 D04 多模态赛道</strong>、<strong>大创项目模型智能道路异常图像生成</strong>
              以及<strong>C4 大赛（用智能体作为作品参加）</strong>。
            </p>
            <p>
              担任学校<strong>"虎牙卫"课题组本科生负责人</strong>，
              该课题组除两名本科生外，还包括<strong>9名研究生和1名博士生</strong>。
            </p>
          </div>
          <div className="cta-container">
            <Link to="/features" className="cta-button primary">
              <span>查看技能</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/demo" className="cta-button secondary">
              作品展示
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>向下滚动</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </section>

      <section className="features-section" ref={featuresRef}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>关于我</h2>
          <p>热爱技术，勇于探索，在实践中成长</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={statsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="stat-number">12人</span>
          <span className="stat-label">课题组规模</span>
        </motion.div>
        <div className="stat-divider" />
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={statsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="stat-number">4项</span>
          <span className="stat-label">并行项目</span>
        </motion.div>
        <div className="stat-divider" />
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={statsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="stat-number">OPC</span>
          <span className="stat-label">创业目标</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
