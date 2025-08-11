import Button from "../ui/Button";

export default function CTASection() {
  return (
    <div className="py-16 sm:py-24 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Turn memories into reminders,
      </h2>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
        in minutes
      </h2>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Button href="/signup" size="lg">
          Try wishewell for free
        </Button>
        <Button variant="outline" size="lg">
          Browse features →
        </Button>
      </div>
      
      <p className="text-sm text-gray-400">
        No credit card needed | ⭐ 4.8/5 on reviews
      </p>
    </div>
  );
}
