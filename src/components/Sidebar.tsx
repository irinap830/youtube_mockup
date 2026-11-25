import React from 'react';

export default function Sidebar(): React.ReactElement {
  const menuItems: string[] = ['Home', 'Shorts', 'Subscriptions', 'Library', 'History'];

  return (
    <aside className="sidebar">
      {menuItems.map((item) => (
        <div key={item} className="sidebar-item">
          {item}
        </div>
      ))}
    </aside>
  );
}
