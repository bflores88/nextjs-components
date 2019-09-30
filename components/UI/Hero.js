import PropTypes from 'prop-types';

const hero = (props) => (
	<>
		<section className="hero-container">
			<div className="hero-image">
				<div className="hero-text">{props.text}</div>
			</div>
		</section>
		<style jsx>{`
 .hero-container, .hero-image {
  width: 100%;
 }

 .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.15)), url("${props.imgUrl}");
  height: ${props.height ? props.height : '500px'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
 }

 .hero-text {
  width: ${props.width ? props.width : 'auto'};
  text-align: ${props.align ? props.align : 'center'};
  font-size: 20px;
  position: absolute;
  top: ${props.top ? props.top : '50%'};
  left: ${props.left ? props.left : '50%'};
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.85);
 }

 @media (min-width: 768px){
  .hero-text {
     font-size: 24px;
  }
 }

  @media (min-width: 992px){
  .hero-text {
     font-size: ${props.fontSize ? props.fontSize : '20px'};
  }
 }
 `}</style>
	</>
);

export default hero;

hero.propTypes = {
	imgUrl: PropTypes.string,
	text: PropTypes.string,
	fontSize: PropTypes.string,
	align: PropTypes.string,
	width: PropTypes.string,
	top: PropTypes.string,
	left: PropTypes.string,
	height: PropTypes.string,
};
