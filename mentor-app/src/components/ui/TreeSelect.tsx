import { TreeSelect as AntTreeSelect } from 'antd';
import type { TreeSelectProps as AntTreeSelectProps } from 'antd';
import { ChevronDownIcon } from '@/components/icons';

export type TreeSelectProps = AntTreeSelectProps;

const DEFAULT_SUFFIX_ICON = <ChevronDownIcon className="size-4" />;

export default function TreeSelect({ suffixIcon, ...props }: TreeSelectProps) {
  return (
    <AntTreeSelect suffixIcon={suffixIcon ?? DEFAULT_SUFFIX_ICON} {...props} />
  );
}
