interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function Sidebar({ activeItem, setActiveItem }: SidebarProps): React.ReactElement {
  const menuItems: string[] = ['Home', 'Shorts', 'Subscriptions', 'Library', 'History'];

  return (
      <aside className="sidebar">
        {menuItems.map((item) => (
            <div
                key={item}
                className={`sidebar-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}
            >
              {item}
            </div>
        ))}
      </aside>
  );
}
