import { motion } from 'framer-motion';
import { AnimatedCard } from '../components/MotionWrapper';
import qrCodeImg from '../assets/qr-code.png';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>联系</h1>
          <p>欢迎交流，期待与你的每一次对话</p>
        </motion.div>
      </section>

      <section className="help-content contact-content">
        <div className="contact-grid">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedCard>
              <div className="contact-item wechat-contact">
                <div className="contact-icon">💬</div>
                <h3>微信联系</h3>
                <p>扫描下方二维码添加微信好友</p>
                <div className="qr-code-container">
                  <img src={qrCodeImg} alt="微信二维码" className="qr-code-img" />
                  <p className="qr-hint">扫一扫上面的二维码，加我为朋友</p>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedCard>
              <div className="contact-item phone-contact">
                <div className="contact-icon">📞</div>
                <h3>电话联系</h3>
                <p>工作日随时可拨打电话或发送短信</p>
                <a href="tel:13730876848" className="phone-number">
                  137-3087-6848
                </a>
                <p className="contact-hint">点击号码可直接拨打</p>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>

        <motion.div
          className="contact-footer-note"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            🚀 欢迎讨论 Vibe Coding、Agent 开发、OPC 创业、AI 前沿技术等话题，
            期待与你交流碰撞！
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Help;
