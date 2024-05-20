import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310136770681634859~c5_100x100.jpeg?lk3s=a5d48078&nonce=72312&refresh_token=26eed4891a97c547a98390e0fdd8bf14&x-expires=1715936400&x-signature=sH7QA21s4XwzEQo5K4bjSrn88a4%3D&shp=a5d48078&shcp=81f88b70" alt="Huyy" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>iShowSpeed</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NiggaSpeedAss</span>
            </div>
        </div>
    );
}

export default AccountItem;