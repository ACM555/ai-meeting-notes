import { motion } from 'framer-motion';
import { AnimatedCard } from '../components/MotionWrapper';
import useInView from '../hooks/useInView';
import './Pricing.css';

const Pricing = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const plans = [
    {
      name: '免费版',
      price: '¥0',
      period: '永久免费',
      description: '适合个人用户初步体验',
      features: [
        '每月60分钟转录',
        '基础摘要生成',
        '单语言支持',
        '7天历史记录',
        '标准客服支持',
      ],
      notIncluded: [
        '多语言支持',
        '高级数据分析',
        'API接口调用',
        '私有化部署',
      ],
      cta: '立即开始',
      popular: false,
    },
    {
      name: '专业版',
      price: '¥99',
      period: '/月',
      description: '适合团队和小型企业',
      features: [
        '每月1000分钟转录',
        '高级AI摘要',
        '多语言实时翻译',
        '无限历史记录',
        '优先客服支持',
        '团队协作功能',
        'API接口调用',
      ],
      notIncluded: [],
      cta: '立即升级',
      popular: true,
    },
    {
      name: '企业版',
      price: '¥499',
      period: '/月',
      description: '适合大型企业机构',
      features: [
        '无限分钟转录',
        '企业级AI摘要',
        '全语言支持',
        '私有化部署选项',
        '专属客户成功经理',
        'SLA服务保障',
        '定制化集成',
        '高级安全合规',
      ],
      notIncluded: [],
      cta: '联系销售',
      popular: false,
    },
  ];

  return (
    <div className="pricing-page">
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>透明定价</h1>
          <p>选择最适合您的方案，所有方案均包含7天无条件退款</p>
        </motion.div>
      </section>

      <section className="pricing-content" ref={ref}>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <AnimatedCard className={plan.popular ? 'popular' : ''}>
                <div className="pricing-card">
                  {plan.popular && <div className="popular-badge">最受欢迎</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="description">{plan.description}</p>

                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="included">
                        <span className="icon">✓</span>
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="not-included">
                        <span className="icon">×</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`cta-btn ${plan.popular ? 'primary' : 'secondary'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>常见问题</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>分钟数用完怎么办？</h4>
            <p>可以在设置中购买额外的分钟包，或升级到更高方案获得更多额度。</p>
          </div>
          <div className="faq-item">
            <h4>支持私有化部署吗？</h4>
            <p>企业版用户可选择私有化部署方案，数据完全存储在您的服务器上。</p>
          </div>
          <div className="faq-item">
            <h4>如何申请发票？</h4>
            <p>登录后在账户设置中申请发票，我们支持增值税普通发票和专用发票。</p>
          </div>
          <div className="faq-item">
            <h4>可以试用吗？</h4>
            <p>免费版永久可用，专业版和企业版有7天全额退款保障。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
