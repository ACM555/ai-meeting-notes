import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '../components/MotionWrapper';
import { supabase } from '../lib/supabase';
import qrCodeImg from '../assets/qr-code.png';
import './Help.css';

const Help = () => {
  const [formData, setFormData] = useState({ name: '', email: '', content: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, content } = formData;

    if (!name.trim() || !content.trim()) {
      setStatus({ type: 'error', message: '请至少填写姓名和留言内容' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const { error } = await supabase.from('messages').insert([
      {
        name: name.trim(),
        email: formData.email.trim(),
        content: content.trim(),
      },
    ]);

    if (error) {
      setStatus({ type: 'error', message: `提交失败：${error.message}` });
    } else {
      setStatus({ type: 'success', message: '留言已发送，感谢你的联系！' });
      setFormData({ name: '', email: '', content: '' });
    }

    setSubmitting(false);
  };

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
        {/* 联系卡片 - 统一高度，两列 */}
        <div className="contact-grid">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedCard className="contact-card-inner">
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

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedCard className="contact-card-inner">
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
        </div>

        {/* 留言板 */}
        <motion.div
          className="message-board"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="message-board-header">
            <span className="message-board-icon">✉️</span>
            <h2>留言板</h2>
            <p>有任何想法或合作意向？欢迎给我留言</p>
          </div>

          <form className="message-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  姓名 <span className="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="你的名字"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={50}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">邮箱</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com（选填）"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={100}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="content">
                留言 <span className="required">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                rows={5}
                placeholder="写下你想说的话..."
                value={formData.content}
                onChange={handleChange}
                maxLength={1000}
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? '✅ ' : '❌ '}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="spinner" />
                  提交中...
                </>
              ) : (
                '提交留言'
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          className="contact-footer-note"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
