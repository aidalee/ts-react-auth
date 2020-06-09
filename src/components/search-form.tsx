import React from "react";
import { Form, Select, Input, Row, Col } from "antd";
const Item = Form.Item;
const Option = Select.Option;
class SearchForm extends React.Component {
  render() {
    return (
      <Form layout="inline">
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <Item>
              <Select>
                <Option value="100">100</Option>
              </Select>
            </Item>
          </Col>
          <Col span={12}>
            <Item>
              <Input />
            </Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default SearchForm;
