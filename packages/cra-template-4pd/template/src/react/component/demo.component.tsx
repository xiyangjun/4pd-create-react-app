import React, { memo } from 'react';
import { DemoComponentProps } from '../container/demo.container';

import '../style/demo.less';
import logo from 'src/resource/image/logo.svg';

const DemoComp: React.FC<DemoComponentProps> = memo(props => {
    return (
        <div className="demo">
            <img src={logo} width={200} />
        </div>
    );
});
export default DemoComp;
