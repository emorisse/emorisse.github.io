import React from 'react';
import { ArrowUpRight, Brain, FileText, TrendingUp, Heart, BookOpen, LucideIcon } from 'lucide-react';

interface InfoGraphicItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

const InfoGraphicItem: React.FC<InfoGraphicItemProps> = ({ icon: Icon, title, content }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-500 mb-2" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-center">{content}</p>
  </div>
);

const MadeToStickInfographic: React.FC = () => (
  <div className="bg-gray-100 p-8 rounded-xl">
    <h2 className="text-2xl font-bold text-center mb-6">Erich Morisse: AI-Driven Strategic Leader</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <InfoGraphicItem
        icon={ArrowUpRight}
        title="Simple"
        content="Transform complex AI into business-driving solutions"
      />
      <InfoGraphicItem
        icon={Brain}
        title="Unexpected"
        content="Turn 100's of documents into into one-click, revenue-boosting solution"
      />
      <InfoGraphicItem
        icon={FileText}
        title="Concrete"
        content="Launched Red Hat's first AI product for infrastructure code"
      />
      <InfoGraphicItem
        icon={TrendingUp}
        title="Credible"
        content="20+ years turning cutting-edge tech into market leaders"
      />
      <InfoGraphicItem
        icon={Heart}
        title="Passionate"
        content="Making AI accessible and valuable"
      />
      <InfoGraphicItem
        icon={BookOpen}
        title="Results"
        content="Transformed bank's cloud costs into industry-leading success story"
      />
    </div>
  </div>
);

export default MadeToStickInfographic;
