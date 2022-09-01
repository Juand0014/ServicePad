import { IconApi, IconBudgeting, IconOnboarding, IconOnline } from '../../../assets/icons';
import { Text, Title } from '../../atoms';
import { BenefitsSectionContainer, CardsContainerBenefits  } from '../../atoms/Cards/CardContainer';
import { BenefitsCard } from '../../molecules/Cards/BenefitsCards';

export const BenefitsSection = () => {
	return (
		<BenefitsSectionContainer>
			<div className="section-header">
				<Title size='md'>Why choose Easybank?</Title>
				<div className="subtitle">
					<Text tertiary>We leverage Open Banking to turn your bank acount into your financial hub.</Text>
					<Text tertiary>Control your finances like never before.</Text>
				</div>
			</div>
			<div className="section-body">
				<CardsContainerBenefits>
					<BenefitsCard 
						icon={<IconOnline />} 
						title="Online Banking" 
						content="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. " 
						/>
					<BenefitsCard 
						icon={<IconBudgeting />} 
						title="Simple Budgeting" 
						content="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits." 
						/>
						<BenefitsCard 
						icon={<IconOnboarding />} 
						title="Fast Onboarding" 
						content="We don’t do branches. Open your account in minutes online and start taking control of your finances right away. " 
						/>
						<BenefitsCard 
						icon={<IconApi />} 
						title="Open API" 
						content="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. " 
						/>
				</CardsContainerBenefits>
			</div>
		</BenefitsSectionContainer>
)}