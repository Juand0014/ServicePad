import Shadows from '../../../assets/Shadows';
import Movils from '../../../assets/Movils';
import { ButtonLink } from '../../atoms';
import { ImageSectionContainer, InfoSectionContainer, TextSectionContainer } from '../../atoms/Sections/SectionStyle';

export const HeroSection = () => {
		return (
				<InfoSectionContainer>
						<TextSectionContainer>
							<div className="section-title">
								<h2>Next generation digital banking</h2>
							</div>
							<div className="section-text">
								<p>
								Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, nvesting, and much more.
								</p>
							</div>
							<div className="section-button">
							<ButtonLink size='15px' to={''}>
								Request Invite
							</ButtonLink>
							</div>
						</TextSectionContainer>
						<ImageSectionContainer>
								<Shadows width='100%' height='700' className='shadows' />
								<Movils width='100%' height='100%' className='movils-image'/>
						</ImageSectionContainer>
				</InfoSectionContainer>
		);
}