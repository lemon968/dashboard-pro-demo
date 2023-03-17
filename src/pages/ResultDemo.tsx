
import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography, Space, Divider, Tabs, Radio, DatePicker, Table, Pagination, Icon, Button, Result ,Descriptions } from 'antd';
import { CheckCircleFilled, } from '@ant-design/icons';
import React from 'react';
import _ from 'lodash';
const { Statistic } = StatisticCard;
const { RangePicker } = DatePicker;

const ResultDemo: React.FC = () => {
    const intl = useIntl();
    return (
        <PageContainer
        // content={intl.formatMessage({
        //   id: 'pages.admin.subPage.title',
        //   defaultMessage: 'This page can only be viewed by admin',
        // })}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Result
                    status="success"
                    title="Successfully Purchased Cloud Server ECS!"
                    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                    extra={[
                        <Button type="primary" key="console">
                            Go Console
                        </Button>,
                        <Button key="buy">Buy Again</Button>,
                    ]}
                />
                {/* <CheckCircleFilled style={{ width: 72, height: 72 }} />
                <div style={{ fontSize: 24 }}>提交成功</div>
                <div style={{ fontSize: 14, color: 'rgba(0,0,0,.45)', marginTop: 8 }}>提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 </div>
                <div style={{ marginTop: 16 }}>
                    <Button type='primary'>返回列表</Button>
                    <Button>查看项目</Button>
                    <Button>打印</Button>
                </div> */}
                <div style={{ marginTop: 16, background: '#fafafa' }}>

                </div>
            </div>



        </PageContainer>
    );
};

export default ResultDemo;
