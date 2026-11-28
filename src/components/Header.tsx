import React from 'react';

interface HeaderProps {
    toggleSidebar: () => void;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
                                   toggleSidebar,
                                   searchQuery,
                                   setSearchQuery,
                               }: HeaderProps): React.ReactElement {
    return (
        <header className="header">
            <div className="header-left">
                <button onClick={toggleSidebar} className="menu-btn">
                    ☰
                </button>
                <h2 className="logo">YouTube</h2>
            </div>

            <div className="header-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchQuery(e.target.value)
                    }
                />
                {searchQuery && (
                    <button
                        className="clear-btn"
                        onClick={() => setSearchQuery('')}
                        title="Clear search"
                    >
                        ✕
                    </button>
                )}
                <button className="search-btn">🔍</button>
            </div>

            <div className="header-right">
                <button>📹</button>
                <button>🔔</button>
                <div className="user-avatar">U</div>
            </div>
        </header>
    );
}
