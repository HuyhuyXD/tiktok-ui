import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'

const cx =  classNames.bind(styles);

function Menu() {
    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                       
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
     );
}

export default Menu;