import { getData } from 'apis/CreateAxios';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import GitHubModal from 'components/landing/GitHubModal';
import Navigation from 'components/landing/Navigation.js';
import Error from 'components/Error';
import Loading from 'components/Loading';
import 'styles/App.scss';

function App() {
	let content;
	const navigation = getData('/navigation');
	const home = getData('/home');
	const about = getData('/about');
	const experience = getData('/experience');

	if (navigation[2]) {
		content = <Loading />
	} else if (!navigation[2] && navigation[1]) {
		content = <Error error={navigation[1]} />
	}

	else {
		content = <div>
			<Navigation navigation={navigation[0]} />
			<Content home={home[0]} about={about[0]} experience={experience[0]} />
			<Footer />
			<GitHubModal />
		</div>
	}

	return (
		<div>
			{content}
		</div>
	);
}

export default App;
