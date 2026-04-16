import { motion } from 'framer-motion';
import { AnimatedCard } from '../components/MotionWrapper';
import './About.css';

const About = () => {
  const team = [
    { name: '张明', role: '创始人 & CEO', desc: '前某大厂技术VP，15年AI领域经验' },
    { name: '李华', role: 'CTO', desc: '顶级院校AI博士，专注NLP研究' },
    { name: '王芳', role: '设计总监', desc: '前某硅谷公司设计负责人' },
  ];

  const techs = [
    { name: 'React', desc: '现代化UI框架' },
    { name: 'TensorFlow', desc: '深度学习引擎' },
    { name: 'WebRTC', desc: '实时通信技术' },
    { name: 'WebGL', desc: '高性能图形渲染' },
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>关于我们</h1>
          <p>用AI重新定义会议体验</p>
        </motion.div>
      </section>

      <section className="about-content">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>我们的故事</h2>
          <p>
            AI会议纪要诞生于2024年，源于一个简单的想法：让每一次会议都有价值。
            我们的团队由来自顶尖科技公司和学术机构的AI专家、产品设计师组成，
            致力于用最先进的人工智能技术，解决会议记录繁琐、信息遗漏的痛点。
          </p>
          <p>
            我们相信，技术的力量在于释放人类的创造力。
            通过自动化重复性的记录工作，我们让每一个人都能专注于真正重要的事：
            思考、创造、决策。
          </p>
        </motion.div>

        <div className="team-section">
          <h2>核心团队</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="team-card">
                  <div className="avatar">{member.name[0]}</div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="desc">{member.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h2>技术架构</h2>
          <div className="tech-grid">
            {techs.map((tech, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="tech-card">
                  <h3>{tech.name}</h3>
                  <p>{tech.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
