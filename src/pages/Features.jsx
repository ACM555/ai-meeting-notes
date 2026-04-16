import { motion } from 'framer-motion';
import { AnimatedCard, TiltCard } from '../components/MotionWrapper';
import useInView from '../hooks/useInView';
import './Features.css';

const Features = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: '🤖',
      title: '智能体平台开发',
      description: '熟练掌握 Coze、百炼、腾讯元器、Dify 等主流智能体平台开发，能够快速搭建和部署 AI 智能体应用。',
      details: ['Coze 智能体开发', '百炼平台集成', '腾讯元器应用', 'Dify 工作流编排']
    },
    {
      icon: '💻',
      title: 'Vibe Coding 工具链',
      description: '熟练使用 Vibe Coding 工具，本个人网站即采用 Vibe Coding 工具实现，同时开发了个人文件处理工具。',
      details: ['Claude Code', 'Cursor / Codex', 'Vite + React 项目', '文件处理自动化工具']
    },
    {
      icon: '🔧',
      title: 'Agent 开发框架',
      description: 'LangChain / AutoGen / LangGraph、RAG；React、Plan、Multi-agent、Context Engineering、Harness Engineering 均有所涉猎。明确不论 AI 是否达到 AGI，都必须考虑上下文管理、控制流设计、错误恢复、反馈回路四个关键部分。',
      details: ['LangChain / AutoGen / LangGraph', 'RAG 检索增强生成', 'React & Plan Agent 模式', 'Multi-Agent 架构设计', 'Context & Harness Engineering']
    },
    {
      icon: '📚',
      title: '知识库自动化',
      description: '利用微信 Qclaw 和 WorkBuddy 完全实现 Obsidian 知识库自动化整理和沉淀。另利用 Qclaw 实现自动刷学习通网课并封装成了 Skill，实现随时随地刷学习通网课。',
      details: ['Obsidian 知识库自动化', 'Qclaw 微信机器人', 'WorkBuddy 智能助手', '学习通自动刷课 Skill']
    },
  ];

  return (
    <div className="features-page">
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>技能</h1>
          <p>持续学习，不断精进，用技术创造价值</p>
        </motion.div>
      </section>

      <section className="features-content" ref={ref}>
        <div className="skills-note">
          <AnimatedCard>
            <div className="note-box">
              <p className="note-text">
                🎯 后续会继续<strong>系统学习 Agent 开发</strong>，
                专门针对<strong>垂直化专业领域 Agent 开发</strong>的技术实现。
              </p>
            </div>
          </AnimatedCard>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard>
                <AnimatedCard>
                  <div className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <ul className="feature-details">
                      {feature.details.map((detail, i) => (
                        <li key={i}>
                          <span className="check-icon">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
