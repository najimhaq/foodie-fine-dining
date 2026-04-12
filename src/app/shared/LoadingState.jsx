// components/shared/LoadingState.jsx

const LoadingState = ({ title = 'Loading...' }) => {
  return (
    <div className='mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm'>
      <div className='mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900' />
      <h2 className='mt-5 text-xl font-semibold text-slate-900'>{title}</h2>
      <p className='mt-2 text-slate-600'>Please wait a moment.</p>
    </div>
  );
};

export default LoadingState;
