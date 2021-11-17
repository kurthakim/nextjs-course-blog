import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.jpeg"
          alt="An image showing Kurt"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        I blog about web developemnt - Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eum numquam velit voluptas blanditiis et beatae
        reprehenderit nisi obcaecati pariatur voluptates?
      </p>
    </section>
  );
}

export default Hero;
