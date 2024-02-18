import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SideBar() {
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Shape">
                        <MenuItem> Square</MenuItem>
                        <MenuItem> Circle </MenuItem>
                    </SubMenu>
                    <SubMenu label="Language">
                        <MenuItem> JavaScript</MenuItem>
                        <MenuItem> PHP </MenuItem>
                    </SubMenu>
                    <SubMenu label="Theme">
                        <MenuItem> Dark</MenuItem>
                        <MenuItem> Light </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    );
}
