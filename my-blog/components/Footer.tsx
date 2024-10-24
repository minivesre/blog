import React from 'react';
import Image from 'next/image'; // Impor komponen Image

const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-purple-600 text-white-500">
            <p>Get in touch:</p>
            <a href="https://www.instagram.com/fllorln" target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
                <Image 
                    src="/ig.png" // Ganti dengan path gambar yang sesuai
                    alt="Instagram" 
                    width={24} // Tentukan lebar gambar
                    height={24} // Tentukan tinggi gambar
                    className="mr-1"
                />
            </a>
            
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/x.png" // Ganti dengan path gambar yang sesuai
                    alt="Twitter" 
                    width={24} // Tentukan lebar gambar
                    height={24} // Tentukan tinggi gambar
                />
            </a>
        </footer>
    );
};

export default Footer;
