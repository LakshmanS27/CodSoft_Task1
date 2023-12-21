export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm</p>
          <p className="section--title bigger-name">Lakshman Shanmugam</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color bigger-title">Engineering Student</span>{" "}
            <br />
            Aspiring Application And Software Developer
          </h1>
          <p className="hero--section-description">
          "Innovate, Elevate, Code: Passionately Crafting Applications and Software Solutions."
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
