const OutcomeScreen = ({ title, message, isSuccess }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className={`text-4xl font-bold mb-6 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">{message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver a intentar
        </button>
      </div>
    </div>
  );
};

export default OutcomeScreen;