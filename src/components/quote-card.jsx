export default function QuoteCard({ author, tags, quote }) {
    return (
        <article className="relative rounded-xl bg-[#20293A] w-[550px] h-[215px] flex flex-col gap-8">
            <header className='flex flex-col gap-3 mt-7 z-10'>
                <h1 className='text-base font-bold text-center'>{author}</h1>
                <div className='flex justify-center gap-3 w-full'>
                    {
                        tags?.map(tag => (
                            <p key={tag} className='text-[10px] text-[#6466E9] border-[1px] rounded-xl border-[#6466E9] text-center px-3'>{tag}</p>
                        ))
                    }
                </div>
            </header>
            <footer className='z-10'>
                <blockquote className='text-center px-8'><cite className='not-italic text-2xl font-semibold text-[#fafafa96]'>“{quote}”</cite></blockquote>
            </footer>
            <img src="/bg-image-random-quote.svg" alt="background random quote" className='absolute bottom-0 right-0' />
        </article>
    )
}