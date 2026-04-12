const Loading = () => {
  return (
    <section className='bg-[#0f0f0f] px-4 py-32 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 max-w-3xl animate-pulse'>
          <div className='h-4 w-32 rounded-full bg-white/10'></div>
          <div className='mt-4 h-10 w-80 rounded-xl bg-white/10'></div>
          <div className='mt-4 h-4 w-full max-w-2xl rounded-xl bg-white/10'></div>
          <div className='mt-2 h-4 w-[80%] max-w-xl rounded-xl bg-white/10'></div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-3xl border border-white/10 bg-[#161616] p-5'
            >
              <div className='h-60 w-full animate-pulse rounded-2xl bg-white/10'></div>

              <div className='mt-5 animate-pulse'>
                <div className='mb-4 flex items-center justify-between'>
                  <div className='h-6 w-20 rounded-full bg-white/10'></div>
                  <div className='h-4 w-8 rounded bg-white/10'></div>
                </div>

                <div className='h-6 w-[85%] rounded bg-white/10'></div>
                <div className='mt-3 h-4 w-full rounded bg-white/10'></div>
                <div className='mt-2 h-4 w-[70%] rounded bg-white/10'></div>

                <div className='mt-6 flex items-center justify-between'>
                  <div className='h-5 w-16 rounded bg-white/10'></div>
                  <div className='h-5 w-14 rounded bg-white/10'></div>
                </div>

                <div className='mt-6 h-5 w-24 rounded bg-white/10'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
