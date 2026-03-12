import { useState } from 'react';
import {
  ChevronDownIcon,
  HomeIcon,
  LightBulbIcon,
  ListBulletIcon,
  FolderIcon,
  CircleStackIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon,
} from '@/components/icons';
import Layout from '../../components/ui/Layout';
import Tabs from '../../components/ui/Tabs';
import Text from '../../components/ui/Text';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import RadioGroupCard, {
  type RadioGroupCardOption,
} from '../../components/ui/RadioGroupCard';
import IconButton from '../../components/ui/IconButton';

const { Header, Content, Sider } = Layout;

const SIDEBAR_WIDTH = 96;
const TIMEZONE_OPTIONS = [
  { value: 'Europe/Kiev', label: 'Eastern European Time (UTC+02:00)' },
];

const TIME_FORMAT_OPTIONS: RadioGroupCardOption<'24h' | '12h'>[] = [
  { value: '24h', label: '24-hour', example: '14:42' },
  { value: '12h', label: '12-hour', example: '2:42 PM' },
];

const SETTINGS_TABS = [
  { key: 'personal-info', label: 'Personal Info' },
  { key: 'security', label: 'Security' },
  { key: 'localization', label: 'Localization' },
  { key: 'users-roles', label: 'Users & Roles' },
  { key: 'data-centers', label: 'Data Centers' },
  { key: 'urgency-effort', label: 'Urgency & Effort' },
  { key: 'impact-areas', label: 'Impact Areas' },
];

const SIDEBAR_ICONS = [
  HomeIcon,
  LightBulbIcon,
  ListBulletIcon,
  FolderIcon,
  CircleStackIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon,
];

export default function SettingsPage() {
  const [timeFormat, setTimeFormat] = useState<'24h' | '12h'>('24h');

  return (
    <Layout className="min-h-screen bg-black">
      <Sider
        width={SIDEBAR_WIDTH}
        className="!bg-black border-r border-neutral-800"
        style={{ minHeight: '100vh' }}
      >
        <div className="flex flex-col h-full py-5 px-[28px]">
          <div className="flex items-center justify-center h-10 w-full shrink-0 mb-5">
            <span className="text-white font-medium text-xl">M</span>
          </div>
          <div className="flex flex-1 flex-col gap-5 items-center w-10">
            {SIDEBAR_ICONS.map((Icon, i) => (
              <IconButton
                key={i}
                variant="text"
                colorScheme="neutral"
                icon={<Icon className="text-lg" />}
                className="!size-10 !flex !items-center !justify-center !rounded-xl !p-0"
              />
            ))}
          </div>
        </div>
      </Sider>
      <Layout className="flex-1 min-h-screen bg-black">
        <Header className="!bg-neutral-900 !px-10 !py-5 !h-auto !leading-none flex items-center justify-between border-b border-transparent">
          <Text className="!text-white !text-xl !font-medium !m-0">
            Settings
          </Text>
          <div className="flex items-center gap-1 rounded-xl border border-neutral-800 px-[6px] py-[6px]">
            <Avatar
              size={28}
              className="!bg-[#044015] !text-[#7af59d] !text-sm !font-medium"
            >
              UM
            </Avatar>
            <ChevronDownIcon className="size-3.5 text-neutral-400" />
          </div>
        </Header>
        <Content className="bg-black border border-neutral-800 border-b-0 rounded-t-3xl pt-10 px-10 pb-8">
          <Tabs
            variant="settings"
            tabBarGutter={24}
            defaultActiveKey="localization"
            items={SETTINGS_TABS.map((tab) => ({
              key: tab.key,
              label: tab.label,
              children:
                tab.key === 'localization' ? (
                  <div className="flex flex-col gap-10 pt-6">
                    <div className="flex flex-col gap-6 max-w-[428px]">
                      <div className="flex flex-col gap-2">
                        <Text className="!text-sm !font-medium !text-white !leading-6">
                          Timezone
                        </Text>
                        <Text className="!text-[13px] !text-neutral-500 !leading-5">
                          Choose your local time zone
                        </Text>
                      </div>
                      <Select
                        value="Europe/Kiev"
                        options={TIMEZONE_OPTIONS}
                        className="w-full"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[428px]">
                      <Text className="!text-sm !font-medium !text-white !leading-6">
                        Time Format
                      </Text>
                      <Text className="!text-[13px] !text-neutral-500 !leading-5 mb-2">
                        Choose your preferred display format for time
                      </Text>
                      <RadioGroupCard
                        value={timeFormat}
                        onChange={setTimeFormat}
                        options={TIME_FORMAT_OPTIONS}
                        name="time-format"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button disabled>Save Changes</Button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-6 text-neutral-500 text-sm">
                    {tab.label} — coming soon
                  </div>
                ),
            }))}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
