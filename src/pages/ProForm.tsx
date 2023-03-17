import { PageContainer, ProCard, ProFormDigit,ProFormMoney ,ProFormCascader} from '@ant-design/pro-components';
import { Alert, Card, Typography, Space, Divider, Tabs, Radio, DatePicker, message } from 'antd';
import { useIntl } from '@umijs/max';
import React, { useRef } from 'react';
import _ from 'lodash';
import { useState } from 'react';
const { RangePicker } = DatePicker;
import moment from 'dayjs';
import {
    DrawerForm,
    LightFilter,
    LoginForm,
    ModalForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormRadio,
    ProFormSelect,
    ProFormText,
    QueryFilter,
    StepsForm,
    ProFormDatePicker,
    ProFormList,
    ProFormTreeSelect,
} from '@ant-design/pro-components';

const ProFormDemo: React.FC = () => {
    const intl = useIntl();
    const onChange = (key) => {
        console.log(key);
    };
    const waitTime = (time: number = 100) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    };
    const formRef = useRef<
        ProFormInstance<{
            name: string;
            company?: string;
            useMode?: string;
        }>
    >();
    const items = [
        {
            key: '1',
            label: `基础表单`,
            children: <div>
                <ProForm<{
                    name: string;
                    company?: string;
                    useMode?: string;
                }>
                    onFinish={async (values) => {
                        await waitTime(2000);
                        console.log(values);
                        const val1 = await formRef.current?.validateFields();
                        console.log('validateFields:', val1);
                        const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
                        console.log('validateFieldsReturnFormatValue:', val2);
                        message.success('提交成功');
                    }}
                    formRef={formRef}
                    params={{ id: '100' }}
                    formKey="base-form-use-demo"
                    dateFormatter={(value, valueType) => {
                        console.log('---->', value, valueType);
                        return value.format('YYYY/MM/DD HH:mm:ss');
                    }}
                    request={async () => {
                        await waitTime(1500);
                        return {
                            name: '蚂蚁设计有限公司',
                            useMode: 'chapter',
                        };
                    }}
                    autoFocusFirstInput
                >
                    <ProForm.Group>
                        <ProFormText
                            width="md"
                            name="name"
                            required
                            dependencies={[['contract', 'name']]}
                            addonBefore={<a>客户名称应该怎么获得？</a>}
                            addonAfter={<a>点击查看更多</a>}
                            label="签约客户名称"
                            tooltip="最长为 24 位"
                            placeholder="请输入名称"
                            rules={[{ required: true, message: '这是必填项' }]}
                        />
                        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormText
                            name={['contract', 'name']}
                            width="md"
                            label="合同名称"
                            placeholder="请输入名称"
                        />
                        <ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="合同生效时间" />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormSelect
                            options={[
                                {
                                    value: 'chapter',
                                    label: '盖章后生效',
                                },
                            ]}
                            readonly
                            width="xs"
                            cacheForSwr
                            name="useMode"
                            label="合同约定生效方式"
                        />
                        <ProFormSelect.SearchSelect
                            width="xs"
                            options={[
                                {
                                    value: 'time',
                                    label: '履行完终止',
                                    type: 'time',
                                    options: [
                                        {
                                            value: 'time1',
                                            label: '履行完终止1',
                                        },
                                        {
                                            value: 'time2',
                                            label: '履行完终止2',
                                        },
                                    ],
                                },
                            ]}
                            name="unusedMode"
                            label="合同约定失效方式"
                        />
                    </ProForm.Group>
                    <ProFormText width="sm" name="id" label="主合同编号" />
                    <ProFormText name="project" width="md" disabled label="项目名称" initialValue="xxxx项目" />
                    <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />

                </ProForm>
            </div >,
        },
        {
            key: '2',
            label: `分步表单`,
            children: <div>
                <StepsForm
                    onFinish={async (values: any) => {
                        await waitTime(2000);
                        console.log(values);
                        const waitTime = (time: number = 100) => {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve(true);
                                }, time);
                            });
                        };
                        message.success('提交成功');
                    }}
                >
                    <StepsForm.StepForm title="第一步">
                        <ProForm.Group>
                            <ProFormText
                                width="md"
                                name="name"
                                label="签约客户名称"
                                tooltip="最长为 24 位"
                                placeholder="请输入名称"
                            />
                            <ProFormText
                                width="md"
                                name="company"
                                label="我方公司名称"
                                placeholder="请输入名称"
                            />
                        </ProForm.Group>
                        <ProForm.Group>
                            <ProFormText
                                name={['contract', 'name']}
                                width="md"
                                label="合同名称"
                                placeholder="请输入名称"
                            />
                            <ProFormDateRangePicker
                                width="md"
                                name={['contract', 'createTime']}
                                label="合同生效时间"
                            />
                        </ProForm.Group>
                    </StepsForm.StepForm>
                    <StepsForm.StepForm title="第二步">
                        <ProForm.Group>
                            <ProFormSelect
                                options={[
                                    {
                                        value: 'chapter',
                                        label: '盖章后生效',
                                    },
                                ]}
                                readonly
                                width="xs"
                                name="useMode"
                                label="合同约定生效方式"
                            />
                            <ProFormSelect
                                width="xs"
                                options={[
                                    {
                                        value: 'time',
                                        label: '履行完终止',
                                    },
                                ]}
                                name="unusedMode"
                                label="合同约定失效效方式"
                            />
                        </ProForm.Group>
                    </StepsForm.StepForm>
                    <StepsForm.StepForm title="第二步">
                        <ProFormText width="sm" name="id" label="主合同编号" />
                        <ProFormText
                            name="project"
                            width="md"
                            disabled
                            label="项目名称"
                            initialValue="xxxx项目"
                        />
                        <ProFormText
                            width="xs"
                            name="mangerName"
                            disabled
                            label="商务经理"
                            initialValue="启途"
                        />
                    </StepsForm.StepForm>
                </StepsForm>
            </div >
        },
        {
            key: '3',
            label: `高级表单`,
            children: <div>
                <ProForm<{
                    name: string;
                    company?: string;
                    useMode?: string;
                }>
                    onFinish={async (values) => {
                        await waitTime(2000);
                        console.log(values);
                        const val1 = await formRef.current?.validateFields();
                        console.log('validateFields:', val1);
                        const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
                        console.log('validateFieldsReturnFormatValue:', val2);
                        message.success('提交成功');
                    }}
                    formRef={formRef}
                    params={{ id: '100' }}
                    formKey="base-form-use-demo"
                    dateFormatter={(value, valueType) => {
                        console.log('---->', value, valueType);
                        return value.format('YYYY/MM/DD HH:mm:ss');
                    }}
                    request={async () => {
                        await waitTime(1500);
                        return {
                            name: '蚂蚁设计有限公司',
                            useMode: 'chapter',
                        };
                    }}
                    autoFocusFirstInput
                >
                    <ProForm.Group>
                        <ProFormText
                            width="md"
                            name="name"
                            required
                            dependencies={[['contract', 'name']]}
                            addonBefore={<a>客户名称应该怎么获得？</a>}
                            addonAfter={<a>点击查看更多</a>}
                            label="签约客户名称"
                            tooltip="最长为 24 位"
                            placeholder="请输入名称"
                            rules={[{ required: true, message: '这是必填项' }]}
                        />
                        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormDigit name="count" label="人数" width="lg" />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormText
                            name={['contract', 'name']}
                            width="md"
                            label="合同名称"
                            placeholder="请输入名称"
                        />
                        <ProFormDateRangePicker width="md" name={['contract', 'createTime']} label="合同生效时间" />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormSelect
                            options={[
                                {
                                    value: 'chapter',
                                    label: '盖章后生效',
                                },
                            ]}
                            readonly
                            width="xs"
                            cacheForSwr
                            name="useMode"
                            label="合同约定生效方式"
                        />
                        <ProFormSelect.SearchSelect
                            width="xs"
                            options={[
                                {
                                    value: 'time',
                                    label: '履行完终止',
                                    type: 'time',
                                    options: [
                                        {
                                            value: 'time1',
                                            label: '履行完终止1',
                                        },
                                        {
                                            value: 'time2',
                                            label: '履行完终止2',
                                        },
                                    ],
                                },
                            ]}
                            name="unusedMode"
                            label="合同约定失效方式"
                        />
                        <ProFormMoney
                            width="md"
                            name="money"
                            label="合同约定金额"
                            fieldProps={{
                                numberPopoverRender: true,
                            }}
                        />
                    </ProForm.Group>
                    <ProFormText width="sm" name="id" label="主合同编号" />
                    <ProFormText name="project" width="md" disabled label="项目名称" initialValue="xxxx项目" />
                    <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
                    <ProFormCascader
                        width="md"
                        request={async () => [
                            {
                                value: 'zhejiang',
                                label: '浙江',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: '杭州',
                                        children: [
                                            {
                                                value: 'xihu',
                                                label: '西湖',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                value: 'jiangsu',
                                label: 'Jiangsu',
                                children: [
                                    {
                                        value: 'nanjing',
                                        label: 'Nanjing',
                                        children: [
                                            {
                                                value: 'zhonghuamen',
                                                label: 'Zhong Hua Men',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                        name="areaList"
                        label="区域"
                        initialValue={['zhejiang', 'hangzhou', 'xihu']}
                        // addonAfter={'qixian'}
                    />
                    {/* <ProFormTreeSelect
                        initialValue={['0-0-0']}
                        label="树形下拉选择器"
                        width={600}
                        fieldProps={{
                            fieldNames: {
                                label: 'title',
                            },
                            treeData,
                            treeCheckable: true,
                            showCheckedStrategy: TreeSelect.SHOW_PARENT,
                            placeholder: 'Please select',
                        }}
                    /> */}
                    <ProFormDatePicker
                        name="date"
                        transform={(value) => {
                            return {
                                date: moment(value).unix(),
                            };
                        }}
                    />
                    <ProFormList name="datas" initialValue={[{ date: '2022-10-12 10:00:00' }]}>
                        {() => {
                            return (
                                <ProFormDatePicker
                                    name="date"
                                    transform={(value) => {
                                        return {
                                            date: moment(value).unix(),
                                        };
                                    }}
                                />
                            );
                        }}
                    </ProFormList>
                </ProForm>
                );
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

export default ProFormDemo;
