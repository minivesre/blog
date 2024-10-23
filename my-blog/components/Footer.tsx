const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-purple-600 text-white-500">
            <p>Get in touch:</p>
            <a href="https://www.instagram.com/fllorln" target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
                <img src="/ig.png" alt="Instagram" className="w-6 h-6 mr-1" />
            </a>
            
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src="/x.png" alt="Twitter" className="w-6 h-6" />
                </a>
        </footer>
    );
};

export default Footer;
