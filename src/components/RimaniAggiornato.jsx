const RimaniAggiornato = () => {
  return (
    <section
      className="bg-gray-900 py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1920x400/2d3748/a0aec0?text=Background+Moderno')", // Immagine placeholder più scura e moderna
      }}
    >
      <div className="container mx-auto max-w-lg bg-gray-100 p-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-red-600 mb-2 text-center">
          RIMANI AGGIORNATO
        </h2>
        <p className="text-gray-700 mb-8 text-center text-balance">
          Iscriviti per ricevere aggiornamenti su eventi e novità della fanfara.
        </p>
        <form>
          <div className="mb-6">
            {/* <label
              htmlFor="email"
              className="block text-gray-800 text-md font-medium mb-2"
            >
              Indirizzo Email *
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors placeholder:text-gray-500"
              placeholder="Inserisci indirizzo email"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            ISCRIVITI ORA
          </button>
        </form>
      </div>
    </section>
  );
};

export default RimaniAggiornato;
