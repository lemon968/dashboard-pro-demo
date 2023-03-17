import { PageContainer, ProCard, StatisticCard, ProList, ProFormRadio, ProFormSwitch } from '@ant-design/pro-components';
import { Alert, Card, Typography, Space, Badge, Tabs, Radio, Progress, DatePicker, Button, Tag } from 'antd';
import { useIntl } from '@umijs/max';
import React from 'react';
import _ from 'lodash';
import { useState } from 'react';
const { RangePicker } = DatePicker;
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import request from 'umi-request';
type GithubIssueItem = {
    url: string;
    id: number;
    number: number;
    title: string;
    labels: {
        name: string;
        color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
};

const ProListDemo: React.FC = () => {
    const intl = useIntl();
    const onChange = (key) => {
        console.log(key);
    };
    const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>('extra');

    const [ghost, setGhost] = useState<boolean>(false);
    const IconText = ({ icon, text }: { icon: any; text: string }) => (
        <span>
            {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
            {text}
        </span>
    );
    const data = [
        '语雀的天空',
        'Ant Design',
        '蚂蚁金服体验科技',
        'TechUI',
        'TechUI 2.0',
        'Bigfish',
        'Umi',
        'Ant Design Pro',
    ].map((item) => ({
        title: item,
        subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
        actions: [<a key="run">邀请</a>, <a key="delete">删除</a>],
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
        content: (
            <div
                style={{
                    flex: 1,
                }}
            >
                <div
                    style={{
                        width: 200,
                    }}
                >
                    <div>发布中</div>
                    <Progress percent={80} />
                </div>
            </div>
        ),
    }));
    const dataSource = [
        {
            title: '语雀的天空',
        },
        {
            title: 'Ant Design',
        },
        {
            title: '蚂蚁金服体验科技',
        },
        {
            title: 'TechUI',
        },
    ];
    const dataSource2 = [
        {
            name: '实验名称1',
            desc: '系统性的沉淀B端知识体系',
            content: [
                {
                    label: '模型数',
                    value: 2903,
                },
                {
                    label: '指标数',
                    value: 3720,
                },
                {
                    label: '实验状态',
                    value: '成功',
                    status: 'success',
                },
            ],
        },
        {
            name: '实验名称2',
            desc: '系统性的沉淀B端知识体系',
            content: [
                {
                    label: '模型数',
                    value: 2904,
                },
                {
                    label: '指标数',
                    value: 3721,
                },
                {
                    label: '实验状态',
                    value: '成功',
                    status: 'success',
                },
            ],
        },
        {
            name: '实验名称3',
            desc: '系统性的沉淀B端知识体系',
            content: [
                {
                    label: '模型数',
                    value: 2905,
                },
                {
                    label: '指标数',
                    value: 3722,
                },
                {
                    label: '实验状态',
                    value: '成功',
                    status: 'success',
                },
            ],
        },
    ];
    type GithubIssueItem = {
        url: string;
        id: number;
        number: number;
        title: string;
        labels: {
            name: string;
            color: string;
        }[];
        state: string;
        comments: number;
        created_at: string;
        updated_at: string;
        closed_at?: string;
    };

    const renderBadge = (count: number, active = false) => {
        return (
            <Badge
                count={count}
                style={{
                    marginBlockStart: -2,
                    marginInlineStart: 4,
                    color: active ? '#1890FF' : '#999',
                    backgroundColor: active ? '#E6F7FF' : '#eee',
                }}
            />
        );
    };
    const [activeKey, setActiveKey] = useState<React.Key | undefined>('tab1');
    const items = [
        {
            key: '1',
            label: `搜索列表`,
            children: <div>
                <ProList<GithubIssueItem>
                    toolBarRender={() => {
                        return [
                            <Button key="3" type="primary">
                                新建
                            </Button>,
                        ];
                    }}
                    search={{}}
                    rowKey="name"
                    headerTitle="搜索列表"
                    request={async (params = {}) =>
                        request<{
                            data: GithubIssueItem[];
                        }>('https://proapi.azurewebsites.net/github/issues', {
                            params,
                        })
                    }
                    pagination={{
                        pageSize: 5,
                    }}
                    showActions="hover"
                    metas={{
                        title: {
                            dataIndex: 'user',
                            title: '用户',
                        },
                        avatar: {
                            dataIndex: 'avatar',
                            search: false,
                        },
                        description: {
                            dataIndex: 'title',
                            search: false,
                        },
                        subTitle: {
                            dataIndex: 'labels',
                            render: (_, row) => {
                                return (
                                    <Space size={0}>
                                        {row.labels?.map((label: { name: string }) => (
                                            <Tag color="blue" key={label.name}>
                                                {label.name}
                                            </Tag>
                                        ))}
                                    </Space>
                                );
                            },
                            search: false,
                        },
                        actions: {
                            render: (text, row) => [
                                <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
                                    链路
                                </a>,
                                <a href={row.url} target="_blank" rel="noopener noreferrer" key="warning">
                                    报警
                                </a>,
                                <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
                                    查看
                                </a>,
                            ],
                            search: false,
                        },
                        status: {
                            // 自己扩展的字段，主要用于筛选，不在列表中显示
                            title: '状态',
                            valueType: 'select',
                            valueEnum: {
                                all: { text: '全部', status: 'Default' },
                                open: {
                                    text: '未解决',
                                    status: 'Error',
                                },
                                closed: {
                                    text: '已解决',
                                    status: 'Success',
                                },
                                processing: {
                                    text: '解决中',
                                    status: 'Processing',
                                },
                            },
                        },
                    }}
                />
            </div>
        },
        {
            key: '2',
            label: `查询表格`,
            children: <div>
                <ProList<GithubIssueItem>
                    // toolBarRender={() => {
                    //     return [
                    //         <Button key="3" type="primary">
                    //             新建
                    //         </Button>,
                    //     ];
                    // }}
                    search={{}}
                    rowKey="name"
                    // headerTitle="查询列表"
                    request={async (params = {}) =>
                        request<{
                            data: GithubIssueItem[];
                        }>('https://proapi.azurewebsites.net/github/issues', {
                            params,
                        })
                    }
                    pagination={{
                        pageSize: 5,
                    }}
                    showActions="hover"
                    metas={{
                        title: {
                            dataIndex: 'user',
                            title: '用户',
                        },
                        avatar: {
                            dataIndex: 'avatar',
                            search: false,
                        },
                        description: {
                            dataIndex: 'title',
                            search: false,
                        },
                        subTitle: {
                            dataIndex: 'labels',
                            render: (_, row) => {
                                return (
                                    <Space size={0}>
                                        {row.labels?.map((label: { name: string }) => (
                                            <Tag color="blue" key={label.name}>
                                                {label.name}
                                            </Tag>
                                        ))}
                                    </Space>
                                );
                            },
                            search: false,
                        },
                        // actions: {
                        //     render: (text, row) => [
                        //         <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
                        //             链路
                        //         </a>,
                        //         <a href={row.url} target="_blank" rel="noopener noreferrer" key="warning">
                        //             报警
                        //         </a>,
                        //         <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
                        //             查看
                        //         </a>,
                        //     ],
                        //     search: false,
                        // },
                        status: {
                            // 自己扩展的字段，主要用于筛选，不在列表中显示
                            title: '状态',
                            valueType: 'select',
                            valueEnum: {
                                all: { text: '全部', status: 'Default' },
                                open: {
                                    text: '未解决',
                                    status: 'Error',
                                },
                                closed: {
                                    text: '已解决',
                                    status: 'Success',
                                },
                                processing: {
                                    text: '解决中',
                                    status: 'Processing',
                                },
                            },
                        },
                    }}
                />
            </div>
        },
        {
            key: '3',
            label: `标准列表`,
            children: <div>
                <ProList<{ title: string }>
                    toolBarRender={() => {
                        return [
                            <Button key="3" type="primary">
                                新建
                            </Button>,
                        ];
                    }}
                    itemLayout="vertical"
                    rowKey="id"
                    headerTitle="竖排样式"
                    dataSource={dataSource}
                    metas={{
                        title: {},
                        description: {
                            render: () => (
                                <>
                                    <Tag>语雀专栏</Tag>
                                    <Tag>设计语言</Tag>
                                    <Tag>蚂蚁金服</Tag>
                                </>
                            ),
                        },
                        actions: {
                            render: () => [
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ],
                        },
                        extra: {
                            render: () => (
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            ),
                        },
                        content: {
                            render: () => {
                                return (
                                    <div>
                                        段落示意：蚂蚁金服设计平台
                                        design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                                        design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
                                    </div>
                                );
                            },
                        },
                    }}
                />
            </div>
        },
        {
            key: '4',
            label: `卡片列表`,
            children: <div
                style={{
                    backgroundColor: '#eee',
                    margin: -24,
                    padding: 24,
                }}
            >
                <ProFormRadio.Group
                    label="actions 放置的地方"
                    options={[
                        {
                            label: '设置为 action',
                            value: 'actions',
                        },
                        {
                            label: '设置为 extra',
                            value: 'extra',
                        },
                    ]}
                    fieldProps={{
                        value: cardActionProps,
                        onChange: (e) => setCardActionProps(e.target.value),
                    }}
                />
                <ProFormSwitch
                    label="幽灵模式"
                    fieldProps={{
                        checked: ghost,
                        onChange: (e) => setGhost(e),
                    }}
                />
                <ProList<any>
                    ghost={ghost}
                    itemCardProps={{
                        ghost,
                    }}
                    pagination={{
                        defaultPageSize: 8,
                        showSizeChanger: false,
                    }}
                    showActions="hover"
                    rowSelection={{}}
                    grid={{ gutter: 16, column: 2 }}
                    onItem={(record: any) => {
                        return {
                            onMouseEnter: () => {
                                console.log(record);
                            },
                            onClick: () => {
                                console.log(record);
                            },
                        };
                    }}
                    metas={{
                        title: {},
                        subTitle: {},
                        type: {},
                        avatar: {},
                        content: {},
                        actions: {
                            cardActionProps,
                        },
                    }}
                    headerTitle="卡片列表展示"
                    dataSource={data}
                />
            </div>
        },
    ];
    return (
        <>
            <ProCard style={{ marginTop: 16 }}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange}

                />

            </ProCard>
        </>
    );
};

export default ProListDemo;
