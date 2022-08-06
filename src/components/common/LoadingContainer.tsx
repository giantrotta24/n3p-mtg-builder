import Loading from './Loading';

const LoadingContainer: React.FC = () => {
  return (
    <div className="antialiased min-h-screen flex flex-col items-center justify-center">
      <p>Loading...</p>
      <Loading />
    </div>
  );
};

export default LoadingContainer;
