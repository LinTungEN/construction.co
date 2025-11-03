import { TypeAnimation } from 'react-type-animation';
import './style.css'; // 你的原本 style.css

const HeroText = () => (
  <div className="hero-text">
    <h3>
      <TypeAnimation
        sequence={[
          '專業營造，築夢踏實',
          1000,
          '專注品質，創新未來',
          1000,
        ]}
        speed={50}       // 打字速度
        repeat={Infinity} // 無限循環
      />
    </h3>
  </div>
);

export default HeroText;
