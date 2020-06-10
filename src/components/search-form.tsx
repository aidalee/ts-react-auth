import React from "react";
import { Form, Select, Input, Row, Col, Modal } from "antd";
import PropTypes from "prop-types";
const Item = Form.Item;
const Option = Select.Option;
interface SearchFormProps {
  nodeSearch: object[];
  showModal: boolean;
  onSearch: (form: any) => void;
  hideModal: () => void;
}
export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { nodeSearch, showModal, onSearch, hideModal } = props;
  const [form] = Form.useForm();
  const handlekOnOk = () => {
    if (onSearch) {
      onSearch(form);
    }
  };
  return (
    <Modal
      title="查询"
      visible={showModal}
      onOk={handlekOnOk}
      onCancel={() => hideModal()}
    >
      <Form form={form} layout="inline">
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <Item name="searchItem">
              <Select>
                {nodeSearch.map((item: any) => {
                  return (
                    <Option
                      disabled={item.disabled}
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
            </Item>
          </Col>
          <Col span={12}>
            <Item name="searchValue" style={{ marginRight: "0px" }}>
              <Input />
            </Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default SearchForm;
