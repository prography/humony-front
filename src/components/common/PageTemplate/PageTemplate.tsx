import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageTemplate: React.FC = ({ children }) => {
    return (
        <div className="page-template">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageTemplate;