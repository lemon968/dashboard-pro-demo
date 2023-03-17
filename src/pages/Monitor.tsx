import { HeartTwoTone, SmileTwoTone, EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography, Space, Divider, Tabs, Radio, DatePicker, Table, Pagination } from 'antd';
import React, { useState } from 'react';
import _ from 'lodash';
const { Statistic } = StatisticCard;
const { RangePicker } = DatePicker;
const Monitor: React.FC = () => {
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
  const [responsive, setResponsive] = useState(false);
  return (
    <PageContainer
    // content={intl.formatMessage({
    //   id: 'pages.admin.subPage.title',
    //   defaultMessage: 'This page can only be viewed by admin',
    // })}
    >
      <div style={{ display: 'flex' }}>
        <ProCard>
          <StatisticCard
            title="活动实时交易情况"
            // style={{ maxWidth: 480 }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                alt="柱状图"
                width="100%"
              />
            }
          />
        </ProCard>
        <div style={{ marginLeft: '16px' }}>
          <ProCard
          title="活动情况预测">
            <StatisticCard
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                  alt="柱状图"
                  width="100%"
                />
              }
            />
          </ProCard>
          <ProCard title="券核效率" style={{marginTop:'16px'}}>
            <StatisticCard
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
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '16px' }}>
        <ProCard>
          各品类占比
          <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
            <StatisticCard
              statistic={{
                title: '总流量(人次)',
                value: 601986875,
              }}
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'} />
            <StatisticCard
              statistic={{
                title: '付费流量',
                value: 3701928,
                description: <Statistic title="占比" value="61.5%" />,
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                  alt="百分比"
                  width="100%"
                />
              }
              chartPlacement="left"
            />
            <StatisticCard
              statistic={{
                title: '免费流量',
                value: 1806062,
                description: <Statistic title="占比" value="38.5%" />,
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                  alt="百分比"
                  width="100%"
                />
              }
              chartPlacement="left"
            />
          </StatisticCard.Group>
        </ProCard>
        <ProCard style={{ marginLeft: '16px' }}>
          <StatisticCard
            title="热门搜索"
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
        <ProCard style={{ marginLeft: '16px' }}>
          <StatisticCard
            title="资源剩余"
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

    </PageContainer>
  );
};

export default Monitor;
