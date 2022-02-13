import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import userData from "assets/data/user-list.data.json";
import { connect } from "react-redux";

import { fetchCustomers } from "redux/reducers/ActionCreators";
import { customersSlice } from "redux/reducers/CustomersSlice";

export class UserList extends Component {
  state = {
    users: userData,
    userProfileVisible: false,
    selectedUser: null,
  };

  deleteUser = (userId) => {
    this.props.deleteCustomer(userId);
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  componentDidMount() {
    if (!this.props.customers.customers.length) {
      this.props.fetch();
    }
  }

  render() {
    const { users, userProfileVisible, selectedUser } = this.state;
    const { customers, isLoading } = this.props.customers;
    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Email",
        dataIndex: "email",
        sorter: {
          compare: (a, b) => a.email.length - b.email.length,
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",

        sorter: (a, b) => a.phone.lenght - b.phone.length,
      },
      {
        title: "Website",
        dataIndex: "website",
        render: (website) => <Tag className="text-capitalize">{website}</Tag>,
        sorter: {
          compare: (a, b) => a.website.length - b.website.length,
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={customers} rowKey="id" />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({ customers: state.customers });
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(fetchCustomers()),
    deleteCustomer: (id) => dispatch(customersSlice.actions.removeCustomer(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
