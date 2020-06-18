import React, { useState } from "react";
import { Table } from "antd";
import { reqGetResourceMagList } from "../../api/index";
import useService from "../../hooks/useService";
// import useMousePosition from "../hook/customHooks/useMousePosition"; // hook只能在函数式组件中使用不能用于class组件
const columns = [
  {
    title: "IP地址",
    dataIndex: "ipaddress",
    key: "ipaddress",
    render: (text: string, record: any) => (
      <a href="/#">{record.node.ipaddress}</a>
    ),
  },
  {
    title: "企业名称",
    dataIndex: ["node", "company", "company_name"],
    key: "company_name",
  },
  {
    title: "状态",
    dataIndex: "is_active",
    key: "is_active",
    render: (text: string, record: any) =>
      record.node.is_active ? "已激活" : "未激活",
  },
  {
    title: "节点数",
    dataIndex: ["node", "service_resource", "res", "nodes"],
  },
];
const MSP: React.FC = () => {
  const [pageSize, setPageSize] = useState(5);
  const [pageNo, setPageNo] = useState(1);

  const {
    loading = false,
    error,
    response = {},
  }: {
    loading: boolean;
    error: any;
    response: any;
  } = useService(reqGetResourceMagList, { pageSize, pageNo });
  // const list = response.value || [];
  console.log(response);
  let list;
  if (response) {
    list = response.value || [];
  }
  return <Table rowKey="_id" columns={columns} dataSource={list}></Table>;
};
export default MSP;
