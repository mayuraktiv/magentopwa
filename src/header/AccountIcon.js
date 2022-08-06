import React, { Component, useState } from "react";

import { Modal, Form, Input } from "antd";
import "antd/dist/antd.min.css";

export default class AccountIcon extends Component {
  render() {
    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
      const [form] = Form.useForm();
      return (
        <div>
          {/* <span className="material-icons">account_circle</span> */}
          <Modal
            visible={visible}
            title="Login"
            okText="Login"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log("Validate Failed:", info);
                });
            }}
          >
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: "public",
              }}
            >
              <Form.Item
                name="username"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password!",
                  },
                ]}
              >
                <Input type="password" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      );
    };
    const CollectionsPage = () => {
      const [visible, setVisible] = useState(false);

      const onCreate = (values) => {
        console.log("Received values of form: ", values);
        setVisible(false);
      };

      return (
        <span>
          <span
            className="material-icons"
            onClick={() => {
              setVisible(true);
            }}
          >
            account_circle
          </span>
          <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </span>
      );
    };
    return (
      <div className="my-account">
        <CollectionsPage />
      </div>
    );
  }
}
