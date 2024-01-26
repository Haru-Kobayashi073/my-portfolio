import { useState, useEffect } from 'react';


const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // コンポーネントがアンマウントされたときにイベントリスナーを解除
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    document.addEventListener("DOMContentLoaded", function () {
        var header = document.getElementById("siteHeader");

        window.addEventListener("scroll", function () {
            // スクロール量が一定以上の場合にヘッダーに影を追加
            if (window.scrollY > 50) {
                header.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.2)";
            } else {
                // スクロール量が一定以下の場合に影を削除
                header.style.boxShadow = "none";
            }
        });
    });

    return (
            <header className={hasScrolled ? 'scrolled' : ''}>
                <ul>
                    <li><a href="">Top</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Social</a></li>
                </ul>
            </header>
    );
};

export default Header;
