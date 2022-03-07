* width classes :
    + w-auto => width: auto;
    + w-full => width: 100%;
    + w-screen => width: 100vw;
    + w-min => width: min-content;
    + w-max => width: max-content;
    + w-0 => width: 0px;
    + w-px => width: 1px;
    + w-0.5 => width: 0.125rem;
    + w-1 => width: 0.25rem;
    + w-1.5 => width: 0.375rem;
    + w-2 => width: 0.5rem;
    + w-96 => width: 24rem;
    + w-1/2 => width: 50%;
    + w-1/3 => width: 33.333333%;
    + w-2/3 => width: 66.666667%;
    + w-1/4 => width: 25%;
    + w-2/4 => width: 50%;
    + w-3/4 => width: 75%;

* min width classes :
    + min-w-0       => min-width: 0px;
    + min-w-full    => min-width: 100%;
    + min-w-min     => min-width: min-content;
    + min-w-max     => min-width: max-content;

- Customizing :

    +  // tailwind.config.js
    + module.exports = {
    +     theme: {
    +     minWidth: {
    +         '0': '0',
    +         '1/4': '25%',
    +         '1/2': '50%',
    +         '3/4': '75%',
    +         'full': '100%',
    +     }
    +     }
    + }


* max width classes :
    + max-w-none  => max-width: none;
    + max-w-min  => max-width: min-content;
    + max-w-max  => max-width: max-content;
    + max-w-0  => max-width: 0rem;
    + max-w-xs  => max-width: 20rem;
    + max-w-sm  => max-width: 40rem;
    + max-w-md  => max-width: 28rem;
    + max-w-lg  => max-width: 32rem;
    + max-w-xl  => max-width: 36rem; 
    + max-w-2xl  => max-width: 42rem; => mỗi xl tăng 6rem
    + max-w-3xl  => max-width: 48rem;
    + max-w-4xl  => max-width: 56rem;
    + max-w-5xl  => max-width: 64rem;
    + max-w-6xl  => max-width: 72rem;
    + max-w-7xl  => max-width: 80rem;
    + max-w-full  => max-width: 100%;
    + max-w-prose  => max-width: 65ch;
    + max-w-screen-sm  => max-width: 640px;
    + max-w-screen-md  => max-width: 768px;
    + max-w-screen-lg  => max-width: 1024px;
    + max-w-screen-xl  => max-width: 1280px;
    + max-w-screen-2xl  => max-width: 1536px;