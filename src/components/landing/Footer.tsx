import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Logo size="lg" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            wishewell enables everyone to create memorable birthday celebrations without forgetting important dates.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-black mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Voice Reminders</a></li>
              <li><a href="#" className="hover:text-black">Gift Suggestions</a></li>
              <li><a href="#" className="hover:text-black">Smart Scheduling</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-4">Use Cases</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Personal</a></li>
              <li><a href="#" className="hover:text-black">Family</a></li>
              <li><a href="#" className="hover:text-black">Business</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Help Center</a></li>
              <li><a href="#" className="hover:text-black">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About us</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          © 2025 WishLoop Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
