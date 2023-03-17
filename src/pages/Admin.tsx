import { HeartTwoTone, SmileTwoTone, EllipsisOutlined, RightOutlined ,ExclamationCircleOutlined} from '@ant-design/icons';
import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography, Space, Divider, Tabs, Radio, DatePicker, Table, Pagination,Icon } from 'antd';
import React from 'react';
import _ from 'lodash';
const { Statistic } = StatisticCard;
const { RangePicker } = DatePicker;
const Admin: React.FC = () => {
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

      <div className='topStats' style={{ display: 'flex', justifyContent: 'space-between' }}>

        <ProCard >
          <StatisticCard
            title={
              <Space>
                <span>总销售额</span>
              </Space>
            }
            extra={<ExclamationCircleOutlined />}
            statistic={{
              value: 1102893,
              prefix: '¥',
              // description: (
              //   <Space>
              //     <Statistic title="实际完成度" value="82.3%" />
              //     <Statistic title="当前目标" value="¥6000" />
              //   </Space>
              // ),
            }}
            // chart={
            //   <>
            //     <img
            //       src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
            //       alt="chart"
            //       width="100%"
            //     />
            //   </>
            // }
            // style={{ width: 268 }}
            footer={
              <div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Statistic title="日环比" value="7.60%" trend="up" />
                    <Statistic title="周环比" value="7.60%" trend="down" /></div>
                </div>
                <Divider />
                <p>日销售额￥12,423</p>

              </div>
            }
          />



        </ProCard>
        <StatisticCard
          title={
            <Space>
              <span>访问量</span>
            </Space>
          }
          extra={<ExclamationCircleOutlined />}
          statistic={{
            value: 1102893,
            prefix: '¥',
            // description: (
            //   <Space>
            //     <Statistic title="实际完成度" value="82.3%" />
            //     <Statistic title="当前目标" value="¥6000" />
            //   </Space>
            // ),
          }}
          chart={
            <>
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                alt="chart"
                width="100%"
              />
            </>
          }
          style={{ marginLeft: 16 }}
          footer={
            <div>
              <Divider />
              <p>日销售额￥12,423</p>

            </div>
          }
        />
        <StatisticCard
          title={
            <Space>
              <span>支付笔数</span>
            </Space>
          }
          extra={<ExclamationCircleOutlined />}
          statistic={{
            value: 1102893,
            prefix: '¥',
            // description: (
            //   <Space>
            //     <Statistic title="实际完成度" value="82.3%" />
            //     <Statistic title="当前目标" value="¥6000" />
            //   </Space>
            // ),
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
              alt="直方图"
              width="100%"
            />
          }
          style={{ marginLeft: 16 }}
          footer={
            <div>
              <div></div>
              <Divider />
              <p>日销售额￥12,423</p>

            </div>
          }
        />
        <StatisticCard
          title={
            <Space>
              <span>运营活动效果</span>
            </Space>
          }
          extra={<ExclamationCircleOutlined />}
          statistic={{
            value: 1102893,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value="82.3%" />
                <Statistic title="当前目标" value="¥6000" />
              </Space>
            ),
          }}
          footer={
            <div>
              <Divider />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Statistic title="日环比" value="7.60%" trend="up" />
                <Statistic title="周环比" value="7.60%" trend="down" /></div>
            </div>
          }
        />
      </div>
      <div className='chartStats'>
        <ProCard style={{ marginTop: 16 }}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange}
            tabBarExtraContent={
              <div>

                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">今日</Radio.Button>
                  <Radio.Button value="b">本周</Radio.Button>
                  <Radio.Button value="c">本月</Radio.Button>
                  <Radio.Button value="d">本年</Radio.Button>
                </Radio.Group>
                <RangePicker />
              </div>
            }

          />

        </ProCard>
      </div>


      <div className='rankStats' style={{ display: 'flex' }} >
        <ProCard
          title={<div>线上热门搜索</div>}
          style={{ marginTop: 16 }}
          extra={<ExclamationCircleOutlined />}>
          <Divider />
          <div style={{ display: 'flex' }}>
            <StatisticCard
              title={
                <Space>
                  <span>搜索用户数</span>
                </Space>
              }
              statistic={{
                value: 1102893,
              }}
              chart={
                <>
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                    alt="chart"
                    width="100%"
                  />
                </>
              }
              style={{ width: 268 }}
            />
            <StatisticCard
              title={
                <Space>
                  <span>搜索用户数</span>
                </Space>
              }
              statistic={{
                value: 1102893,
              }}
              chart={
                <>
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                    alt="chart"
                    width="100%"
                  />
                </>
              }
              style={{ width: 268 }}
            />
          </div>
          <div>
            <Table columns={[
              { title: '排名', dataIndex: 'index', key: 'index', align: 'center', width: 70 },
              { title: '软件版本号', dataIndex: 'version', key: 'version', width: 100 },
              { title: '用户数', dataIndex: 'version', key: 'version', width: 100 },
              { title: '周涨幅', dataIndex: 'version', key: 'version', width: 100 },
            ]} />
            <Pagination />
          </div>
        </ProCard>
        <ProCard
          title={<div>销售额类别占比</div>}
          style={{ marginTop: 16, marginLeft: 16 }}
          extra={<div><Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">全部渠道</Radio.Button>
            <Radio.Button value="b">线上</Radio.Button>
            <Radio.Button value="c">门店</Radio.Button>
          </Radio.Group>
            <ExclamationCircleOutlined />
          </div>}
        >
          <StatisticCard
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                alt="百分比"
                width="100%"
              />
            }
          />
        </ProCard>
      </div>
      <div className='lineStats'>
        <ProCard style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              {_.times(5, i => <StatisticCard
                statistic={{
                  title: '转化率',
                  value: 3701928,
                  // description: <Statistic title="占比" value="61.5%" />,
                }}
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                    alt="百分比"
                    width="100%"
                  />
                }
                chartPlacement="right"
              />)}
            </div>
            <StatisticCard
              // title="大盘趋势"
              // tip="大盘说明"
              // style={{ maxWidth: 480 }}
              // extra={<ExclamationCircleOutlined />}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
                  alt="柱状图"
                  width="100%"
                />
              }
            />
          </div>

        </ProCard>
      </div>





      {/* 
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p> */}
    </PageContainer>
  );
};

export default Admin;
