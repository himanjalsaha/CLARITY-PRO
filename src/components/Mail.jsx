import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Mail(){

    return (
        <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
          <div className="container px-6 pt-6 m-10">
            <div className="my-6  flex justify-center items-center">
              <a
                href="#!"
                type="button"
                className="mx-4 h-9 w-9 items-center flex justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light">
                <FaFacebook />
    
              </a>
              <a
                href="#!"
                type="button"
                className="mx-4 h-9 w-9 rounded-full border-2 items-center flex justify-center border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light">
                <FaInstagram />
              </a>
              <a
                href="#!"
                type="button"
                className="mx-4 h-9 w-9 items-center flex justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light">
                <FaTwitter />
              </a>
              <a
                href="#!"
                type="button"
                className="mx-4 h-9 w-9 items-center flex justify-center rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light">
                <FaLinkedin />
              </a>
            </div>
    
            <div>
              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
                  <div className="md:mb-6 md:ml-auto">
                    <p>
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
    
                  <div className="relative md:mb-6" data-te-input-wrapper-init>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-te-input-state-active:-translate-y-[0.9rem] peer-data-te-input-state-active:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
    
                    </label>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-50 placeholder:text-neutral-200 peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-te-input-state-active:-translate-y-[0.9rem] peer-data-te-input-state-active:scale-[0.8] dark:text-neutral-200 dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Email address"
                    />
                  </div>
    
    
                  <div className="mb-6 md:mr-auto">
                    <button
                      type="submit"
                      className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
    
            <div className="mb-6">
              <p>
              Where productivity meets simplicity. Achieve your tasks with ease and efficiency.<br /> <strong>" Clarity Pro "</strong>
              </p>
            </div> 
          </div>
    
          
        </footer>
      );
}