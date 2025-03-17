import { Route, Routes } from 'react-router-dom';
import './App.css';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MoviesDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Section>
      <Container>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviespage" element={<MoviesPage />} />
          <Route path="/moviesdetailspage" element={<MoviesDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Section>
  );
}

export default App;
