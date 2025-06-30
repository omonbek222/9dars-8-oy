export default function Sidebar() {
  return (
    <aside className="w-[220px] border-r border-gray-200 dark:border-gray-800 p-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">GET STARTED</h2>
      <ul className="space-y-2 text-sm">
        <li>Introduction</li>
        <li>Installation</li>
        <li>components.json</li>
        <li>Theming</li>
        <li>Dark Mode</li>
        <li>CLI</li>
      </ul>
      <h2 className="text-sm font-bold text-gray-500 mt-6 mb-3">COMPONENTS</h2>
      <ul className="space-y-2 text-sm">
        <li>Accordion</li>
        <li>Alert</li>
        <li>Button</li>
      </ul>
    </aside>
  );
}
