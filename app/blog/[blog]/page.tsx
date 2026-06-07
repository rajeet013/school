import BlogLeft from '@/app/components/blog/blog_left'
import BlogHero from '@/app/components/blog/blog_hero'
import Cards from '@/app/components/blog/cards'

const page = async ({ params }: { params: Promise<{ blog: string }> }) => {
  const { blog } = await params
  const currentPage = Number(blog) || 1

  return (
    <div className='flex flex-col'>
      <BlogHero />
      <div className='flex flex-row justify-center'>
        <BlogLeft />
        <Cards currentPage={currentPage} />
      </div>
    </div>
  )
}

export default page