import React from "react";
import { Table, ConfigProvider, Button, Modal } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { reqGetResourceMagList } from "../../api/index";
import { ResourceMagListParams } from "../../api/api_types";
import SearchForm from "../../components/search-form";
export type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";
class RESOURCE extends React.Component {
  state = {
    resourceList: [],
    total: 0,
    locale: zhCN,
    page: 1,
    size: 10,
    showModal: false,
  };
  columns = [
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
  getResourceMagList = async () => {
    const { page, size } = this.state;
    const reqParams: ResourceMagListParams = { page, size };
    const result: any = await reqGetResourceMagList(reqParams);
    if (result) {
      this.setState({
        resourceList: result.value || [],
        total: result.pagination.total,
      });
    }
  };
  handleOnChangePage(page: number, pageSize?: number) {
    this.setState(
      {
        page: page,
        size: pageSize,
      },
      () => {
        this.getResourceMagList();
      }
    );
  }
  handleOnChangePageSize(page: number, pageSize: number) {
    this.setState(
      {
        page: page,
        size: pageSize,
      },
      () => {
        this.getResourceMagList();
      }
    );
  }
  showSearchModal() {
    this.setState({
      showModal: true,
    });
  }
  HandleSearch() {}
  //  执行异步任务: 发异步ajax请求
  componentDidMount() {
    // 获取资源列表
    this.getResourceMagList();
  }
  render() {
    const { resourceList, total, locale, page, showModal } = this.state;
    const position: TablePaginationPosition[] = ["bottomLeft"];
    const paginationProps = {
      total,
      current: page,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: () => `共 ${total} 条`,
      position,
      onChange: (page: number, pageSize?: number) =>
        this.handleOnChangePage(page, pageSize),
      onShowSizeChange: (page: number, pageSize: number) =>
        this.handleOnChangePageSize(page, pageSize),
    };
    return (
      <div>
        <Button type="primary" onClick={this.showSearchModal.bind(this)}>
          查询
        </Button>
        <Modal
          title="查询"
          visible={showModal}
          onOk={this.HandleSearch}
          onCancel={() => {
            this.setState({ showModal: false });
          }}
        >
          <SearchForm></SearchForm>
        </Modal>
        <ConfigProvider locale={locale}>
          <Table
            rowKey="_id"
            columns={this.columns}
            dataSource={resourceList}
            pagination={paginationProps}
          ></Table>
        </ConfigProvider>
      </div>
    );
  }
}
export default RESOURCE;
