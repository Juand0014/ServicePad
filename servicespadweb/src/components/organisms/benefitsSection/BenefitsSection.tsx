import { IconApi, IconBudgeting, IconOnboarding, IconOnline } from '../../../assets/icons';
import { Text, Title } from '../../atoms';
import './style.scss';

export const BenefitsSection = () => {
	return (
		<div className="benefits-section">
			<div className="section-header">
				<div className="title">
					<Title size='md'>Why choose Easybank?</Title>
				</div>
				<div className="subtitle">
					<Text tertiary>We leverage Open Banking to turn your bank acount into your financial hub.</Text>
					<Text tertiary>Control your finances like never before.</Text>
				</div>
			</div>
			<div className="section-body">
				<div className="cards-container">
					<div className="card">
						<div className="card-header">
							<div className="icon">
								<IconOnline />
							</div>
							<Title size='md' >Online Banking</Title>
						</div>
						<div className="card-body">
							<Text tertiary size='md'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </Text>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<div className="icon">
								<IconBudgeting />
							</div>
							<Title size='md' >Online Banking</Title>
						</div>
						<div className="card-body">
							<Text tertiary size='md'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </Text>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<div className="icon">
								<IconOnboarding />
							</div>
							<Title size='md' >Online Banking</Title>
						</div>
						<div className="card-body">
							<Text tertiary size='md'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </Text>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<div className="icon">
								<IconApi />
							</div>
							<Title size='md' >Open API</Title>
						</div>
						<div className="card-body">
							<Text tertiary size='md'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. </Text>
						</div>
					</div>
				</div>
			</div>
		</div>
)}