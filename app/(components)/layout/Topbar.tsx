import React from 'react'

export default function Topbar() {
  return (
    <div className='w-full bg-white px-20 py-2'>
      <div className='flex items-center justify-between'>
        <div>
          <div className='socmedList flex items-center gap-4'>

            {/* Instagram */}
            <a
              href="YOUR_INSTAGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="block w-6 h-6 p-1 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'red' }} // Warna khas Instagram
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="YOUR_TIKTOK_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="block w-6 h-6 p-1 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'red' }} // Warna khas TikTok (hitam)
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.5.06 1.54.03 3.08-.01 4.62-.47-.03-.94-.07-1.41-.11-.48 3.63-2.16 6.99-5.06 9.45-2.46 2.05-5.64 3.01-8.83 2.92C5.99 22.02 3.7 20.59 2.22 18.45c-1.32-1.95-1.86-4.43-1.6-6.86.24-2.2.99-4.33 2.31-6.11 1.33-1.77 3.14-3.13 5.24-3.91.28-.1.56-.21.84-.31 1.01-.33 2.03-.78 2.9-1.48.07-.06.13-.13.2-.2.02-.02.03-.04.05-.05.55-.51 1.23-.88 1.88-1.26.3-.18.61-.35.93-.51z"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="YOUR_YOUTUBE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="block w-6 h-6 p-1 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'red' }} // Warna khas YouTube
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="YOUR_FACEBOOK_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="block w-6 h-6 p-1 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'red' }} // Warna khas Facebook
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2.03998C6.48 2.03998 2 6.51998 2 12.04C2 17.06 5.66 21.21 10.44 21.93V14.89H7.9V12.04H10.44V9.83998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.04H16.34L15.89 14.89H13.56V21.93C18.34 21.21 22 17.06 22 12.04C22 6.51998 17.52 2.03998 12 2.03998Z"></path>
              </svg>
            </a>

          </div>
        </div>
        <div className='appList flex items-center gap-4'>
          <a href="" className='text-[12px]'>Doran Gadget Apps</a>
          |
          <a href="" className='text-[12px]'>JETE Connect</a>
          |
          <a href="" className='text-[12px]'>JETE Smart</a>
          
        </div>
      </div>
    </div>
  )
}
