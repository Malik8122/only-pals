export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface PainPoint {
  emoji: string;
  title: string;
  description: string;
  type: "emotional" | "functional" | "ethical";
}

export interface BudgetItem {
  label: string;
  percent: number;
  amount: string;
  color: string;
  details: string[];
}

export interface PRCampaign {
  title: string;
  emoji: string;
  description: string;
  channels: string[];
}
