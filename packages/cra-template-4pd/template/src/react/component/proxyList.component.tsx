import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { Select, message } from 'antd';
import envIcon from '../../resource/image/envIcon.png';

const { Option } = Select;

const ProxyList: React.FC = memo(() => {
    const [proxyUrl, setProxyUrl] = useState('');
    const [proxyUrlList, setProxyUrlList] = useState<string[]>([]);
    const [showProxyUrl, setShowProxyUrl] = useState(false);

    // 得到所有环境的list
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/dev/proxy');
                if (data) {
                    setProxyUrlList(data);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    // 通过改变url去改变环境
    useEffect(() => {
        (async () => {
            if (proxyUrl) {
                try {
                    const { data } = await axios.get('/proxy/change', {
                        params: {
                            proxyUrl,
                        },
                    });
                    if (data) {
                        message.success(`已经成功切换到环境:${proxyUrl},请重新输入cookie`);
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        })();
    }, [proxyUrl]);

    return (
        <div style={{ position: 'fixed', right: 20, bottom: 0, zIndex: 999 }}>
            {showProxyUrl ? (
                <Select
                    style={{
                        width: '200px',
                    }}
                    placeholder='请选择proxyUrl'
                    onChange={(val: string) => {
                        setProxyUrl(val);
                    }}
                    value={proxyUrl || undefined}
                >
                    {proxyUrlList.map(url => (
                        <Option value={url} key={url}>
                            {url}
                        </Option>
                    ))}
                </Select>
            ) : null}
            <img
                src={envIcon}
                alt='图标'
                style={{ backgroundColor: '#fff' }}
                onClick={() => setShowProxyUrl(!showProxyUrl)}
            />
        </div>
    );
});

export default process.env.NODE_ENV === 'development' ? ProxyList : null; // 判断当前环境是不是dev；
