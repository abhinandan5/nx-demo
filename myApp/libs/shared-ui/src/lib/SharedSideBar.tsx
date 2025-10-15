import { useState } from "react";
import { NavigationPanel } from "@cars24/lego";

interface SidebarItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
  onClick?: () => void;
  href?: string;
  openInNewTab?: boolean;
  badge?: number;
  hasPopover?: boolean;
  popoverContent?: React.ReactNode;
}

interface SharedSideBarProps {
  items?: SidebarItem[];
  width?: number;
  headerImage?: string;
  title?: string;
}

const SharedSideBar: React.FC<SharedSideBarProps> = ({ items = [], width = 240, headerImage = "", title = "" }) => 
  {
  const [selectedKey, setSelectedKey] = useState(items[0]?.id || null);

  const handleSelectionChange = (id: string) => {
    setSelectedKey(id);

    const item = items.find((it) => it.id === id);

    if (!item) return;

    if (typeof item.onClick === "function") {
      return item.onClick();
    }
  };

  const panelItems = items.map(({ id, title: t, icon, children = [], badge, hasPopover, popoverContent }) => (
    { id, 
      title: t, 
      icon, 
      children: (children || []).map(child => ({ id: child.id, title: child.title, children: [] })), 
      badge, hasPopover, popoverContent }));

  return (
    <div style={{ display: "flex" }}>
      <NavigationPanel
        defaultExpandedKeys={["team"]}
        isDefaultOpen
        items={panelItems}
        onSelectionChange={handleSelectionChange}
        selectedKey={selectedKey || undefined}
        showCollapsible
        width={width}
        headerImage={headerImage}
        title={title}
        userData={{
          name: "Guest User",
          email: "guest@example.com",
          profileImage: "https://via.placeholder.com/40",
          profileAltText: "Guest User Profile",
          availability: "available"
        }}
        onSignOut={() => {}}
        onNavigationToggle={() => {}}
        showProfileSection={false}
      />
      <div style={{ flexGrow: 1 }} />
    </div>
  );
};

export default SharedSideBar;
