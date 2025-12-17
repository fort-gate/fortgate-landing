import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'kyt-vs-kyc',
      category: 'Guide',
      title: 'KYC vs KYT: Understanding the Difference in Crypto',
      description: 'As crypto adoption accelerates, regulatory conversations often default to one familiar acronym: KYC. While Know Your Customer remains an important compliance requirement, it is no longer sufficient on its own.',
      author: {
        name: 'Jane Doe',
        date: 'Nov 22, 2023',
        readTime: '8 min read',
        avatar: '/images/placeholder-avatar.png'
      },
      image: '/images/placeholder-blog-1.png'
    },
    {
      slug: 'exchange-hacks-are-not-inevitable',
      category: 'Compliance',
      title: 'Exchange Hacks Are Not Inevitable: Rethinking Security as Infrastructure',
      description: 'Over the past decade, crypto exchanges have become critical gateways to the digital asset economy. They concentrate liquidity, onboard millions of users, and serve as bridges between traditional finance and decentralized systems.',
      author: {
        name: 'Sarah Joners',
        date: 'Oct 24, 2023',
        readTime: '5 min read',
        avatar: '/images/placeholder-avatar.png'
      },
      image: '/images/placeholder-blog-1.png'
    },
    {
      slug: 'navigating-crypto-regulation',
      category: 'Compliance',
      title: 'Navigating the Shifting Sands of Crypto Regulation',
      description: 'Discover the latest AML directives and how Fortgate\'s infrastructure helps you stay compliant without compromising user experience.',
      author: {
        name: 'Jane Doe',
        date: 'Oct 24, 2023',
        readTime: '6 min read',
        avatar: '/images/placeholder-avatar.png'
      },
      image: '/images/placeholder-blog-1.png'
    },
    {
      slug: 'real-time-threat-detection',
      category: 'Security',
      title: 'The Rise of Real-Time Threat Detection in DeFi',
      description: 'Illicit fund flows are faster than ever. We break down how real-time analysis is the only way to protect your protocol and its users.',
      author: {
        name: 'John Smith',
        date: 'Oct 18, 2023',
        readTime: '8 min read',
        avatar: '/images/placeholder-avatar.png'
      },
      image: '/images/placeholder-blog-2.png'
    },
    {
      slug: 'zero-friction-mass-adoption',
      category: 'Technology',
      title: 'Zero Friction: The Key to Mass Adoption',
      description: 'Security shouldn\'t come at the cost of usability. Explore the tech behind Fortgate that keeps ecosystems safe without adding friction for users.',
      author: {
        name: 'Emily Chen',
        date: 'Oct 11, 2023',
        readTime: '5 min read',
        avatar: '/images/placeholder-avatar.png'
      },
      image: '/images/placeholder-blog-3.png'
    }
  ]

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <p className="text-accent text-sm sm:text-base font-medium mb-4">OUR BLOG</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights on Crypto Security
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest research, analysis, and news on compliance, security, and the future of on-chain finance.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="bg-primary/50 backdrop-blur-sm border border-accent/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/10 group cursor-pointer block"
            >
                {/* Post Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-lg border border-accent/30"></div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category */}
                  <p className="text-white/60 text-sm font-medium mb-3">{post.category}</p>
                  
                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold text-xs">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{post.author.name}</p>
                      <p className="text-white/50 text-xs">
                        {post.author.date} · {post.author.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-accent/20">
            {/* Previous Button */}
            <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors ${
                    page === 1
                      ? 'bg-accent text-white'
                      : 'text-white/70 hover:text-white hover:bg-accent/20'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="text-white/50 px-2">...</span>
              <button className="w-10 h-10 rounded-lg font-medium text-sm text-white/70 hover:text-white hover:bg-accent/20 transition-colors">
                10
              </button>
            </div>

            {/* Next Button */}
            <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
              <span className="text-sm font-medium">Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


