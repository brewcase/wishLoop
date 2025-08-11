import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <div className="text-center py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
        The AI-powered birthday reminder platform
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Never miss a birthday again with personalized voice calls and AI-generated gift recommendations. 
        Make every celebration special with intelligent automation.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <Button href="/signup" size="lg">
          Try wishewell for free
        </Button>
        <Button variant="outline" size="lg">
          Browse features →
        </Button>
      </div>
      
      {/* Trust indicators */}
      <div className="text-center text-sm text-gray-400">
        No credit card needed |{" "}
        <span className="inline-flex items-center gap-1">
          ⭐ 4.8/5 on reviews
        </span>
      </div>
    </div>
  );
}
