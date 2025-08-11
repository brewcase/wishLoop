interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-black text-lg font-semibold">
        {stepNumber}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Add Your Friends",
      description: "Enter your friends' birthdays, interests, and contact information in seconds."
    },
    {
      title: "AI Creates Content", 
      description: "Our AI generates personalized reminder content and gift suggestions automatically."
    },
    {
      title: "Get Voice Reminders",
      description: "Receive automated voice calls with personalized messages before each birthday."
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-gray-900 rounded-3xl">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Your birthday reminder in 3 steps</h2>
        <p className="text-lg text-gray-300 mb-16 leading-relaxed">
          Create and manage birthday reminders in three easy steps, eliminating the stress of forgetting important dates.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
