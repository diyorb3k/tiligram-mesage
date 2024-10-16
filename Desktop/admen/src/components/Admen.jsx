import React, { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { Layout, Menu, Avatar, Typography, Button } from "antd";
import {
  HomeOutlined,
  BookOutlined,
  TeamOutlined,
  FileDoneOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ShieldPlus } from "lucide-react";

const { Sider, Header, Content } = Layout;
const { Text } = Typography;
const { SubMenu } = Menu;

const Admen = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        {/* Sidebar qismimiz */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          style={{ height: "100vh", backgroundColor: "#001529", overflowY: "auto" }} // Overflow
        >
          <div style={{ padding: "20px", textAlign: "center", color: "#fff" }}>
            <ShieldPlus
              size={64}
              style={{ marginBottom: "10px" }}
              src="https://joeschmoe.io/api/v1/random"
            />
            <br />
            <Text className="text-base font-poppins" type="secondary" style={{ color: "#fff" }}>
              Admin
            </Text>
          </div>

          <div style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>
            <Text className="text-[#E5E5E5] font-poppins">
              Elektron Kutubxona Tizimi
            </Text>
          </div>

          {/* Menyu qismlari page lar */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link className="font-poppins text-base" to="Dashboad">
                Dashboard
              </Link>
            </Menu.Item>
            <SubMenu
              className="font-poppins text-base"
              key="sub1"
              icon={<TeamOutlined />}
              title="Tashkilot"
            >
              <Menu.Item key="3">
                <Link to="/Malumotlar">
                  <TeamOutlined /> Malumotlar
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              className="font-poppins text-base"
              key="sub2"
              icon={<BookOutlined />}
              title="Kitoblar"
            >
              <Menu.Item key="4" icon={<IoMdSettings />}>
                <Link to="/Sozlamalar">Sozlamalar</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<HiViewGridAdd />} title="Kiritish">
                <Link to="/Kiritish">Kiritish</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<FaDatabase />} title="Resurslar bazasi">
                <Link to="/Resurslarbazasi">Resurslar bazasi</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              className="font-poppins text-base"
              key="sub3"
              icon={<FileDoneOutlined />}
              title="Guvohnoma"
            >
              <Menu.Item key="7" icon={<FaNoteSticky />}>
                <Link to="/Guvohnomaberish">Guvohnoma berish</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              className="font-poppins text-base"
              key="sub4"
              icon={<PieChartOutlined />}
              title="Xisobot"
            >
              <Menu.Item key="8" icon={<TbReportSearch />}>
                <Link to="/Hisobatlar">Xisobatlar</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              className="font-poppins text-base"
              key="10"
              icon={<QuestionCircleOutlined />}
            >
              <Link to="/Tizimyuriqnomasi">Tizim yo'riqnomasi</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Header va Content shu yerda outlet ham joylashgan */}
        <Layout>
          <Header
            className="fixed"
            style={{
              padding: 0,
              backgroundColor: "#F3F4F6",
              display: "flex",
              alignItems: "center",
              position: "fixed",
              width: "100%",
              zIndex: 1000,
              top: 0,
            }}
          >
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
            <div className="flex gap-[10px] font-poppins">
              <Button className="font-poppins text-base" type="primary">
                Kitob olish
              </Button>
              <Button className="font-poppins text-base" type="primary">
                Kitob berish
              </Button>
            </div>
            <div style={{ flexGrow: 1, textAlign: "right", paddingRight: "16px" }}>
              <button>darkmode</button>
            </div>
          </Header>

          <Content
            className="rounded-lg"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: "#fff",
              border: "8px",
              overflowY: "auto", 
              height: "calc(100vh - 64px)", 
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Admen;
