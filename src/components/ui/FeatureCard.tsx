import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconBgColor = "bg-gray-800" 
}: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
