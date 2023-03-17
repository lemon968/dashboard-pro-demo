
import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography, Space, Divider, Tabs, Radio, DatePicker, Table, Pagination, Badge, Descriptions } from 'antd';
import ProSkeleton from '@ant-design/pro-skeleton';
import React from 'react';
import _ from 'lodash';
const { Statistic } = StatisticCard;
const { RangePicker } = DatePicker;

const DescDemo: React.FC = () => {
    const intl = useIntl();
    return (
        <PageContainer
        // content={intl.formatMessage({
        //   id: 'pages.admin.subPage.title',
        //   defaultMessage: 'This page can only be viewed by admin',
        // })}
        >
            <Descriptions title="User Info" layout="vertical" bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Usage Time" span={2}>
                    2019-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1
                    <br />
                </Descriptions.Item>
            </Descriptions>
        </PageContainer>
    );
};

export default DescDemo;
