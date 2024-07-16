import React from 'react';

interface HeroProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: React.FormEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container text-center text-white hero-content">
                <h1 className="display-3 fw-bold mb-4">Book Your Movie Experience</h1>
                <p className="lead mb-5">
                    Discover the latest blockbusters and reserve your seats in just a few clicks
                </p>
                <div className="search-box bg-white p-3 rounded">
                    <form onSubmit={onSearchSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for movies..."
                                value={searchQuery}
                                onChange={onSearchChange}
                            />
                            <button type="submit" className="btn btn-danger">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;