export interface TeamMember {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  initials?: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  email: string;
  teams: string[];
  avatarBg?: string;
}

export interface SalesRecord {
  id: string;
  customer: string;
  status: 'paid' | 'pending' | 'overdue';
  amount: number;
  date: string;
  invoice: string;
}

export interface CompanyRecord {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  employees: number;
  status: 'active' | 'inactive';
  location: string;
}

export interface FileRecord {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  owner: string;
  status: 'active' | 'archived';
}

// Sample data for team members
export const teamMembersData: TeamMember[] = [
  {
    id: '1',
    name: 'Olivia Rhye',
    username: '@olivia',
    avatar: 'http://localhost:3845/assets/2f1190870d753151f58657595136f67c584b5c8c.png',
    status: 'active',
    role: 'Product Designer',
    email: 'olivia@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#c7b9da'
  },
  {
    id: '2',
    name: 'Phoenix Baker',
    username: '@phoenix',
    avatar: 'http://localhost:3845/assets/2780e16db1a4a364d3d872737f7fe9563d7abb29.png',
    status: 'active',
    role: 'Product Manager',
    email: 'phoenix@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#aa9c75'
  },
  {
    id: '3',
    name: 'Lana Steiner',
    username: '@lana',
    avatar: 'http://localhost:3845/assets/d688ab8bff2aebfc3cab587865468c4713ecad78.png',
    status: 'active',
    role: 'Frontend Developer',
    email: 'lana@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#d4b5ad'
  },
  {
    id: '4',
    name: 'Demi Wilkinson',
    username: '@demi',
    avatar: 'http://localhost:3845/assets/c9b5ff46a30dabca6ca1e017e1047cd06f04270b.png',
    status: 'active',
    role: 'Backend Developer',
    email: 'demi@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#bea887'
  },
  {
    id: '5',
    name: 'Candice Wu',
    username: '@candice',
    initials: 'CW',
    status: 'active',
    role: 'Fullstack Developer',
    email: 'candice@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#c7b9da'
  },
  {
    id: '6',
    name: 'Natali Craig',
    username: '@natali',
    avatar: 'http://localhost:3845/assets/ca269fff9961afb9c6a84bffddcb988a6fad7166.png',
    status: 'active',
    role: 'UX Designer',
    email: 'natali@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#d1baa9'
  },
  {
    id: '7',
    name: 'Drew Cano',
    username: '@drew',
    avatar: 'http://localhost:3845/assets/2e2cf1b6f441c6f28c3b0e1e0eb4863eb80b7401.png',
    status: 'active',
    role: 'UX Copywriter',
    email: 'drew@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#d1dfc3'
  },
  {
    id: '8',
    name: 'Orlando Diggs',
    username: '@orlando',
    initials: 'OD',
    status: 'active',
    role: 'UI Designer',
    email: 'orlando@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#c7b9da'
  },
  {
    id: '9',
    name: 'Andi Lane',
    username: '@andi',
    avatar: 'http://localhost:3845/assets/e355a90b1eddfbc917a39138b5c2e12ac350dfe8.png',
    status: 'active',
    role: 'Product Manager',
    email: 'andi@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#d2c7ac'
  },
  {
    id: '10',
    name: 'Kate Morrison',
    username: '@kate',
    avatar: 'http://localhost:3845/assets/6ec94186cc6e3e60f69ecac1443984f93e6078eb.png',
    status: 'active',
    role: 'QA Engineer',
    email: 'kate@untitledui.com',
    teams: ['Design', 'Product', 'Marketing'],
    avatarBg: '#dbc0dd'
  }
];

// Sample data for sales
export const salesData: SalesRecord[] = [
  {
    id: '1',
    customer: 'Olivia Rhye',
    status: 'paid',
    amount: 2420,
    date: 'Dec 13, 2022',
    invoice: 'INV-001'
  },
  {
    id: '2',
    customer: 'Phoenix Baker',
    status: 'pending',
    amount: 1200,
    date: 'Dec 12, 2022',
    invoice: 'INV-002'
  },
  {
    id: '3',
    customer: 'Lana Steiner',
    status: 'overdue',
    amount: 3500,
    date: 'Dec 10, 2022',
    invoice: 'INV-003'
  },
  {
    id: '4',
    customer: 'Demi Wilkinson',
    status: 'paid',
    amount: 890,
    date: 'Dec 9, 2022',
    invoice: 'INV-004'
  },
  {
    id: '5',
    customer: 'Candice Wu',
    status: 'pending',
    amount: 1850,
    date: 'Dec 8, 2022',
    invoice: 'INV-005'
  }
];

// Sample data for companies
export const companiesData: CompanyRecord[] = [
  {
    id: '1',
    name: 'Untitled UI',
    industry: 'Design Systems',
    employees: 50,
    status: 'active',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Figma Inc',
    industry: 'Design Tools',
    employees: 1200,
    status: 'active',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    name: 'Webflow',
    industry: 'Web Development',
    employees: 800,
    status: 'active',
    location: 'San Francisco, CA'
  },
  {
    id: '4',
    name: 'Framer',
    industry: 'Prototyping',
    employees: 150,
    status: 'inactive',
    location: 'Amsterdam, NL'
  }
];

// Sample data for files
export const filesData: FileRecord[] = [
  {
    id: '1',
    name: 'Design-system-guide.pdf',
    type: 'PDF',
    size: '2.4 MB',
    modified: '2 hours ago',
    owner: 'Olivia Rhye',
    status: 'active'
  },
  {
    id: '2',
    name: 'Component-library.sketch',
    type: 'Sketch',
    size: '12.8 MB',
    modified: '1 day ago',
    owner: 'Phoenix Baker',
    status: 'active'
  },
  {
    id: '3',
    name: 'Brand-guidelines.figma',
    type: 'Figma',
    size: '5.2 MB',
    modified: '3 days ago',
    owner: 'Lana Steiner',
    status: 'archived'
  },
  {
    id: '4',
    name: 'User-research-findings.pptx',
    type: 'PowerPoint',
    size: '8.1 MB',
    modified: '1 week ago',
    owner: 'Demi Wilkinson',
    status: 'active'
  }
];