import React from 'react'
import { node } from 'prop-types'

import {
  Container,
  Divider,
  Dropdown,
  Image,
  List,
  Menu,
  Segment,
  Input,
  Sidebar,
  Icon,
} from 'semantic-ui-react'

// core components
import Notification from 'src/Containers/Notification'

class AuthTemplate extends React.Component {
  state = { sidebarOpened: false }
  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
        }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            vertical
            onHide={this.handleSidebarHide}
            visible={sidebarOpened}>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}>
            <Menu
              inverted
              fixed="top"
              style={{
                boxShadow:
                  '0 3px 4px 0 rgba(0,0,0,0.2), 0 3px 3px -2px rgba(0,0,0,0.14), 0 1px 8px 0 rgba(0,0,0,0.12)',
              }}>
              <Container fluid>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item as="a" header>
                  <Image
                    size="mini"
                    src="assets/images/logo.png"
                    style={{ marginRight: '1.5em' }}
                  />
                  Project Name
                </Menu.Item>
                <Menu.Item as="a">Home</Menu.Item>
                <Menu.Item as="a" active>
                  List
                </Menu.Item>

                <Dropdown item simple text="Dropdown">
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className="dropdown icon" />
                      <span className="text">Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position="right">
                  <Dropdown simple item icon="grid layout">
                    <Dropdown.Menu>
                      <Dropdown.Header content="Applications" />
                      <Dropdown.Divider />
                      <Dropdown.Item icon="attention" text="Important" />
                      <Dropdown.Item icon="comment" text="Announcement" />
                      <Dropdown.Item icon="conversation" text="Discussion" />
                    </Dropdown.Menu>
                  </Dropdown>

                  <Menu.Item>
                    <Input icon="search" placeholder="Search..." />
                  </Menu.Item>
                  <Dropdown text="Account" simple item className="icon">
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Container>
            </Menu>
            <div style={{ flex: 1, marginTop: 80 }}>{children}</div>

            <Segment inverted vertical style={{ margin: '2em 0em 0em' }}>
              <Container textAlign="center">
                <Divider inverted section />
                <Image centered size="mini" src="assets/images/logo.png" />
                <List horizontal inverted divided link>
                  <List.Item as="a" href="#">
                    Site Map
                  </List.Item>
                  <List.Item as="a" href="#">
                    Contact Us
                  </List.Item>
                  <List.Item as="a" href="#">
                    Terms and Conditions
                  </List.Item>
                  <List.Item as="a" href="#">
                    Privacy Policy
                  </List.Item>
                </List>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Notification />
      </div>
    )
  }
}

AuthTemplate.propTypes = {
  children: node,
}

export default AuthTemplate
