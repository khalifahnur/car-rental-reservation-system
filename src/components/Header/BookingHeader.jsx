// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';

const BookingHeader = () => {
  return (
    <header className="flex items-center justify-between p-2 py-5 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Link href={'/'}>
          <Image src="/logo.svg" alt="Starcar Logo" width={100} height={40} />
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        {/* <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded-full">Light mode</button>
          <button className="px-4 py-2 bg-gray-400 text-white rounded-full">Dark</button>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.1 2 5 5.1 5 9s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm7 2h-2.1c-.8.6-1.7 1-2.7 1.3.4.5.7 1.2.7 2H18v2H6v-2h2.1c0-.8.3-1.5.7-2-.9-.3-1.8-.8-2.7-1.3H5v-2h14v2z"/>
          </svg>
          <span className="text-gray-700">New York, US</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/user-avatar.jpg" alt="User Avatar" width={40} height={40} className="rounded-full" />
          <span className="text-gray-700">Nancy Holloway</span>
        </div> */}
      </div>
    </header>
  );
};

export default BookingHeader;
