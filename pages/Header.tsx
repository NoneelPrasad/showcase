import React from "react";

import {
  Badge,
  useMantineColorScheme,
  Burger,
  Drawer,
  Anchor,
  Text,
} from "@mantine/core";

import ColorToogle from "./colorToogle";
const Header = () => {
  const [opened, setOpened] = React.useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header>
      <div className="content-desktop">
        <div>
          <Badge size="lg" radius={10} color="yellow">
            My Projects Showcase
          </Badge>
        </div>
        <div className="navbar">
          <ColorToogle />
        </div>
      </div>
      <div className="content-mobile">
        <Badge size="lg" radius={10} color="yellow">
          My Projects Showcase
        </Badge>
        <div className="burger-button">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            size="sm"
          />
        </div>

        <Drawer
          transition="rotate-right"
          transitionDuration={250}
          transitionTimingFunction="ease"
          overlayOpacity={0.55}
          position="right"
          closeButtonLabel="Close drawer"
          title="Menu"
          padding="xl"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className="menu">
            <div className="menu-items">
              <div className="menu-item">
                <ColorToogle />
              </div>
              <div className="menu-item">
                <Text>Contact</Text>

                <Anchor href="mailto:example@mail.com">
                  prasadnonee@gmail.com
                </Anchor>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
