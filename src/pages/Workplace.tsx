import { HeartTwoTone, SmileTwoTone, EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography, Space, Divider, Tabs, Radio, DatePicker, Table, Pagination } from 'antd';
import React from 'react';
import _ from 'lodash';
const { Statistic } = StatisticCard;
const { RangePicker } = DatePicker;
const Workplace: React.FC = () => {
  const intl = useIntl();
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `销售额`,
      children: <StatisticCard
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
            alt="直方图"
            width="100%"
          />
        }
      />,
    },
    {
      key: '2',
      label: `访问量`,
      children: <StatisticCard
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
            alt="直方图"
            width="100%"
          />
        }
      />,
    },
  ];
  return (
    <PageContainer
    // content={intl.formatMessage({
    //   id: 'pages.admin.subPage.title',
    //   defaultMessage: 'This page can only be viewed by admin',
    // })}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <ProCard>
              <StatisticCard
                title="进行中的项目"
                tip="大盘说明"
                style={{ maxWidth: 480 }}
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                    alt="柱状图"
                    width="100%"
                  />
                }
              />
              进行中的项目
            </ProCard>
            <ProCard style={{marginTop:'16px'}}>
              <StatisticCard
                title="动态"
                tip="大盘说明"
                style={{ maxWidth: 480 }}
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                    alt="柱状图"
                    width="100%"
                  />
                }
              />
            </ProCard>
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column',marginLeft:'16px' }}>
          <ProCard>
            <StatisticCard
              title="快速开始 / 便捷导航"
              tip="大盘说明"
              style={{ maxWidth: 480 }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                  alt="柱状图"
                  width="100%"
                />
              }
            />
          </ProCard>
          <ProCard style={{marginTop:'16px'}}>
            <StatisticCard
              title="XX 指数"
              tip="大盘说明"
              style={{ maxWidth: 480 }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                  alt="柱状图"
                  width="100%"
                />
              }
            />
          </ProCard>
          <ProCard style={{marginTop:'16px'}}>
            <StatisticCard
              title="团队"
              tip="大盘说明"
              style={{ maxWidth: 480 }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                  alt="柱状图"
                  width="100%"
                />
              }
            />
          </ProCard>
        </div>
      </div>

    </PageContainer>
  );
};

export default Workplace;
