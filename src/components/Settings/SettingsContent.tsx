import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SettingsContent = () => {
  const [email, setEmail] = useState<string>('admin@example.com');
  const [notifications, setNotifications] = useState<boolean>(true);

  const handleSave = () => {
    alert('Settings saved.');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-6">
      <h3 className="text-lg font-semibold">Settings</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700">Admin Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full" />
      </div>
      <div className="flex items-center">
        <label className="block text-sm font-medium text-gray-700 mr-4">Enable Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </div>
      <Button onClick={handleSave}>Save Settings</Button>
    </div>
  );
};

export default SettingsContent;
