import './App.css';
import beauty from './img/beauty.png';

function App() {
  return (
    <>
      <section class="bg-white min-h-screen flex items-center justify-center">
        {/* main container*/}
        <div class="bg-pink-300 flex shadow-lg rounded-2xl max-w-3xl p-5 items-center">
          {/* left:login form */}
          <div class="sm:w-1/2 px-10">
            <h1 class="font-bold text-2xl">Login</h1>
            <p class="text-sm mt-4">Already have account? Please sign in</p>

            <form class="flex flex-col gap-4" action=''>
              <input class="p-2 mt-8 rounded-xl border" type='text' name='email' placeholder='Email'/>
              <div class="relative">
                <input class="p-2 rounded-xl border w-full" type='password' name='password' placeholder='Password'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 " viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
              </div>
              <button class="bg-pink-400 p-2 rounded-xl py-2 hover:scale-110 duration-300">Sign In</button>
            </form>

            <div class="mt-10 grid grid-cols-3 items-center text-gray-400 text-sm">
              <hr class="border-gray-400"/>
              <p class="text-center">OR</p>
              <hr class="border-gray-400"/>
            </div>

            <button class="bg-white border py-2 rounded-xl w-full mt-5 flex justify-center items-center text-sm text-gray-400 hover:scale-110 duration-300">
              <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Login with Google
            </button>

            <button class="mt-10 text-xs py-4 underline text-gray-400">Forgot your password?</button>

            <hr class="border-gray-400"/>

            <div class="text-xs py-4 flex">
              <p>Don't have an account?</p>
              <button class="underline text-blue-500 pl-3">Register</button>
            </div>
          </div>

          {/* right:image */}
          <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src={beauty} alt=''/>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
