import { useState } from 'react';
import { ChevronDownIcon } from '@/components/icons';
import Layout from '@/components/ui/Layout';
import Tabs from '@/components/ui/Tabs';
import Text from '@/components/ui/Text';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import RadioGroupCard, {
  type RadioGroupCardOption,
} from '@/components/ui/RadioGroupCard';

const { Header, Content } = Layout;
const CONTENT_MAX_WIDTH = 428;
const CONTENT_GAP = 24;

const DEFAULT_TIMEZONE = 'Europe/Kiev';
const DEFAULT_TIME_FORMAT = '24h' as const;

const TIMEZONE_OPTIONS = [
  { value: 'Pacific/Midway', label: 'Midway Island (UTC-11:00)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii (UTC-10:00)' },
  { value: 'America/Anchorage', label: 'Alaska (UTC-09:00)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time US & Canada (UTC-08:00)' },
  { value: 'America/Denver', label: 'Mountain Time US & Canada (UTC-07:00)' },
  { value: 'America/Chicago', label: 'Central Time US & Canada (UTC-06:00)' },
  { value: 'America/New_York', label: 'Eastern Time US & Canada (UTC-05:00)' },
  { value: 'America/Sao_Paulo', label: 'Brasília (UTC-03:00)' },
  { value: 'Atlantic/South_Georgia', label: 'Mid-Atlantic (UTC-02:00)' },
  { value: 'Atlantic/Azores', label: 'Azores (UTC-01:00)' },
  { value: 'Europe/London', label: 'GMT / London (UTC+00:00)' },
  { value: 'Europe/Paris', label: 'Central European Time (UTC+01:00)' },
  { value: DEFAULT_TIMEZONE, label: 'Eastern European Time (UTC+02:00)' },
  { value: 'Asia/Dubai', label: 'Gulf (UTC+04:00)' },
  { value: 'Asia/Karachi', label: 'Pakistan (UTC+05:00)' },
  { value: 'Asia/Dhaka', label: 'Bangladesh (UTC+06:00)' },
  { value: 'Asia/Bangkok', label: 'Bangkok (UTC+07:00)' },
  { value: 'Asia/Singapore', label: 'Singapore (UTC+08:00)' },
  { value: 'Asia/Tokyo', label: 'Japan (UTC+09:00)' },
  { value: 'Australia/Sydney', label: 'Sydney (UTC+10:00)' },
  { value: 'Pacific/Guadalcanal', label: 'Solomon Islands (UTC+11:00)' },
  { value: 'Pacific/Auckland', label: 'New Zealand (UTC+12:00)' },
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

function SettingsHeader() {
  return (
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
  );
}

function LocalizationTabContent() {
  const [timezone, setTimezone] = useState(DEFAULT_TIMEZONE);
  const [timeFormat, setTimeFormat] = useState<'24h' | '12h'>(DEFAULT_TIME_FORMAT);

  const hasChanges =
    timezone !== DEFAULT_TIMEZONE || timeFormat !== DEFAULT_TIME_FORMAT;

  return (
    <div
      className="flex flex-col items-center pt-6"
      style={{ gap: CONTENT_GAP }}
    >
      <div
        className="w-full flex flex-col"
        style={{ maxWidth: CONTENT_MAX_WIDTH, gap: CONTENT_GAP }}
      >
        <section className="flex flex-col gap-2">
          <div className="flex flex-col">
            <Text className="!text-sm !font-medium !text-white !leading-6">
              Timezone
            </Text>
            <Text className="!text-[13px] !text-neutral-500 !leading-5">
              Choose your local time zone
            </Text>
          </div>
          <Select
            value={timezone}
            options={TIMEZONE_OPTIONS}
            onChange={(value) => setTimezone(value ?? DEFAULT_TIMEZONE)}
            className="w-full"
            style={{ width: '100%' }}
          />
        </section>
        <section className="flex flex-col gap-2">
          <div className="flex flex-col">
            <Text className="!text-sm !font-medium !text-white !leading-6">
              Time Format
            </Text>
            <Text className="!text-[13px] !text-neutral-500 !leading-5">
              Choose your preferred display format for time
            </Text>
          </div>
          <RadioGroupCard
            value={timeFormat}
            onChange={setTimeFormat}
            options={TIME_FORMAT_OPTIONS}
            name="time-format"
          />
        </section>
        <div className="flex justify-end">
          <Button
            variant="solid"
            colorScheme="accent"
            size="medium"
            disabled={!hasChanges}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Settings page content (header + tabs). Sidebar is provided by the root layout when using TanStack Router. */
export default function SettingsPage() {
  return (
    <Layout className="flex-1 flex flex-col min-h-screen">
      <SettingsHeader />
      {/* Wrapper matches header grey so rounded Content corners don’t show black triangles */}
      <div className="flex-1 flex flex-col min-h-0 bg-neutral-900">
        <Content className="bg-black border border-neutral-800 border-b-0 rounded-t-3xl pt-10 px-10 pb-8">
          <Tabs
          type="line"
          tabBarGutter={24}
          defaultActiveKey="localization"
          items={SETTINGS_TABS.map((tab) => ({
            key: tab.key,
            label: tab.label,
            children:
              tab.key === 'localization' ? (
                <LocalizationTabContent />
              ) : (
                <div className="pt-6 text-neutral-500 text-sm">
                  {tab.label} — coming soon
                </div>
              ),
          }))}
        />
        </Content>
      </div>
    </Layout>
  );
}
