import { Tag } from 'antd';

type StatusType = 'active' | 'pending' | 'completed' | 'rejected';

interface StatusTagProps {
  status: StatusType;
}

const statusConfig: Record<StatusType, { color: string; label: string }> = {
  active: { color: '#5452f5', label: 'Active' },
  pending: { color: '#d89614', label: 'Pending' },
  completed: { color: '#49aa19', label: 'Completed' },
  rejected: { color: '#dc4446', label: 'Rejected' },
};

export default function StatusTag({ status }: StatusTagProps) {
  const config = statusConfig[status];
  return <Tag color={config.color}>{config.label}</Tag>;
}
