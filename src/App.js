import './App.css';
import estela from './img/estela.png';

function App() {
  return (
    <>
      <section class="bg-pink-400 min-h-screen flex items-center justify-center">
        {/* main container*/}
        <div class="bg-gray-400 flex shadow-lg rounded-2xl max-w-3xl p-5">
          {/* left:login form */}
          <div class="w-1/2">
            <p>hello</p>
          </div>

          {/* right:image */}
          <div class="w-1/2">
            <img class="rounded-2xl" src={estela} alt=''/>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
