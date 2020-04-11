import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../../assets/img/logo.svg';

import { ReactComponent as Service } from './assets/services.svg';
import { ReactComponent as Account } from './assets/account.svg';
import { ReactComponent as Settings } from './assets/settings.svg';

import './menu.scss';
import classnames from 'classnames';

interface MenuProps {
    options: {
        icon: React.FunctionComponent<
            React.SVGProps<SVGSVGElement> & {
                title?: string | undefined;
            }
        >;
        onSelected?: () => {};
    }[];
}

const Menu: React.FC<MenuProps> = ({ options }: MenuProps) => {
    const [selectedOption, setOption] = useState<number>(0);
    return (
        <div className={'menu-continuer'}>
            <div className={'logo-continuer'}>
                <Logo className={'logo'} />
            </div>
            <div className={'options-continuer'}>
                {options.map((option, key) => (
                    <div className={'options'} onClick={() => setOption(key)} key={key}>
                        <div className={'content'}>
                            {React.createElement(option.icon, { className: 'options-logo' })}
                        </div>
                        <div className={classnames('select', { selected: key === selectedOption })} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
