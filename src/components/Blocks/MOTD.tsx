import * as React from 'react'
// import { XMarkIcon } from '@heroicons/react/20/solid'

interface MOTDProps {
  title: string;
  message: string;
  url?: string;
  brandFrom?: string;
  brandTo?: string;
}


const getGradient = (from: string, to: string) => {
  // return "from-brand-two to-brand-one";
  return `from-brand-${from} to-brand-${to}`;
};

export function MOTD({ ...args }:  MOTDProps ) {
  const gradient = getGradient(args.brandFrom || '', args.brandTo || '');
  // const brandToClass = getBrandClass(args.brandTo || '');
  return (
    <div className={`relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-gradient-to-r ${gradient}`}>
      {/* <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r ${gradient} opacity-30`}
          // className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-brand-one to-brand-two opacity-30`}

/>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r ${gradient} opacity-30`}
          // className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r frm-brand-azul to-brand-indigo opacity-30`}

/>
      </div> */}
      <p className="text-sm/6 text-brand-one-foreground">
        <a href="#">
          <strong className="font-semibold">{ args.title}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {args.message}
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        {/* <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"> */}
          {/* <span className="sr-only">Dismiss</span> */}
          {/* <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" /> */}
        {/* </button> */}
      </div>
    </div>
  )
}
