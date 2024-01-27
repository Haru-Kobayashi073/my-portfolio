import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Zenn from '../assets/zenn.svg?react';
import Wantedly from '../assets/Wantedly_Mark_DarkBG.svg?react';


const Social = () => {
    return <>
        <div className="social">
            <ul>
                <li>
                    <a href="https://twitter.com/h_aru073" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} size="2xl" className='sns-icon' />

                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/h_aru073/" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} size="2xl" className='sns-icon' />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Haru-Kobayashi073" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} size="2xl" className='sns-icon' />
                    </a>
                </li>
                <li>
                    <a href="https://zenn.dev/haru_073" target='_blank' rel='noopener noreferrer'>
                        <Zenn className='zenn-icon' />
                    </a>
                </li>
                <li>
                    <a href="https://www.wantedly.com/id/haru_kobayashi_dev" target='_blank' rel='noopener noreferrer'>
                        <Wantedly className='wantedly-icon' />
                    </a>
                </li>
                <p> </p>
            </ul>
        </div>
    </>;
}

export default Social;