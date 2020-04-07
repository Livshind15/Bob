import React, { Fragment } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import { ReactComponent as Clock } from './assets/clock.svg';

import './metadata.scss';

interface MetadataProps {
    creationTime: string;
}

const Metadata: React.FC<MetadataProps> = ({ creationTime }: MetadataProps) => {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    return (
        <Fragment>
            <Clock className={'metadataIcon'} />
            <p className={'metadata'}>{timeAgo.format(new Date(creationTime))}</p>
        </Fragment>
    );
};

export default Metadata;
