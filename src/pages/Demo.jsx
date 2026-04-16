import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import xuexitongImg from '../assets/xuexitong.png';
import obsidian1Img from '../assets/obsidian1.png';
import obsidian2Img from '../assets/obsidian2.png';
import obsidian3Img from '../assets/obsidian3.png';
import './Demo.css';

const Demo = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'Qclaw 自动刷学习通网课',
      description: '利用微信 Qclaw 实现自动刷学习通网课，并封装成了 Skill，实现随时随地自动刷学习通网课。支持进度监控、任务点自动完成、课程进度汇报等功能。',
      images: [xuexitongImg],
      tags: ['Qclaw', '自动化', 'Skill封装', '学习通']
    },
    {
      title: 'WorkBuddy 实现 Obsidian 笔记自动整理',
      description: '利用 WorkBuddy 完全实现 Obsidian 知识库的自动化整理和沉淀，包括 Harness 工程指南撰写、知识库结构化整理、笔记内容汇总等。',
      images: [obsidian1Img, obsidian2Img, obsidian3Img],
      tags: ['WorkBuddy', 'Obsidian', '知识库自动化', 'Harness工程']
    },
  ];

  return (
    <div className="demo-page">
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>作品展示</h1>
          <p>用 AI 工具链打造的实际项目成果</p>
        </motion.div>
      </section>

      <section className="demo-content" ref={ref}>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="project-info">
                <h2>{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className={`project-images ${project.images.length > 1 ? 'multi' : ''}`}>
                {project.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${project.title} - 截图${i + 1}`}
                    className="project-img"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Demo;
