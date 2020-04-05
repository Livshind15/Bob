import React from 'react';
import './action.scss';

interface ActionProps {
    SvgLogo: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    title: string;
    onClickCallback: () => void;
}

const Action: React.FC<ActionProps> = ({ SvgLogo, title, onClickCallback }: ActionProps) => (
    <div className={'dropdown-action-container'} onClick={(): void => onClickCallback()}>
        {React.createElement(SvgLogo, { className: 'img' })}
        <p className={'title'}>{title}</p>
    </div>
);
export default Action;
