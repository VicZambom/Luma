import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logoLuma.png";
import { SvgIconComponent } from "@mui/icons-material";

const drawerWidth = 230;

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => {
  const styles: React.CSSProperties = {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(["margin-left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: "0",
    width: "100%",
    position: "relative",
    display: "block",
    marginTop: "64px",
    minHeight: "calc(100vh - 64px)",
  };

  if (open) {
    styles.transition = theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    });
    styles.marginLeft = `${drawerWidth - 1}px`;
    styles.width = `calc(100% - ${drawerWidth}px)`;
  } else {
    styles.marginLeft = "0px";
    styles.width = "100%";
  }

  return styles;
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["position", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  top: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "center",
  marginBottom: theme.spacing(1),
}));

interface SidebarItem {
  text: string;
  icon: SvgIconComponent;
  path: string;
  color?: string;
}
interface PersistentDrawerLeftProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PersistentDrawerLeft({
  open,
  setOpen,
}: PersistentDrawerLeftProps) {
  const navigate = useNavigate();

  const location = useLocation();

  const sideBarItems: SidebarItem[] = React.useMemo(
    () => [
      {
        text: "Início",
        icon: HomeOutlinedIcon,
        path: "/app/inicio",
        color: "white",
      },
      { text: "Pagamento", icon: WalletOutlinedIcon, path: "/app/pagamento" },
      { text: "Ponto", icon: AccessTimeOutlinedIcon, path: "/app/ponto" },
      { text: "Férias", icon: WbSunnyOutlinedIcon, path: "/app/ferias" },
      {
        text: "Fale com o RH",
        icon: ChatBubbleOutlineOutlinedIcon,
        path: "/app/rh",
      },
      { text: "Sair", icon: LogoutSharpIcon, path: "/app/sair" },
    ],
    []
  );
  const handleItemClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const selectedIndex = React.useMemo(() => {
    const index = sideBarItems.findIndex((item) => {
      if (location.pathname === item.path) {
        return true;
      }
      if (item.path === "/app/ponto") {
        return location.pathname.startsWith(item.path + "/");
      }
      return false;
    });
    return index > -1 ? index : 0;
  }, [location.pathname, sideBarItems]);

  return (
    <Root>
      <CssBaseline />
      <AppBar>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            mt: "0.5rem",
            ml: "12rem",
            background: "transparent",
          }}
        >
          <IconButton
            sx={{
              color: "#5D3998",
              padding: "8px",
            }}
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "fixed",
          top: (theme) => theme.spacing(2),
          left: (theme) => theme.spacing(2),
          zIndex: (theme) => theme.zIndex.drawer + 2,
          display: { xs: "block", sm: "block" },
        }}
      >
        <img
          src={Logo}
          alt="Logo da Luma"
          height="30"
          style={{ background: "white" }}
        />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#5D3998",
            color: "#fff",
            borderRight: "none",
            boxShadow: "none",
            position: "fixed",
            height: "100vh",
            top: 0,
            left: 0,
            transform: open ? "translateX(0)" : `translateX(-${drawerWidth}px)`,
            transition: (theme) =>
              theme.transitions.create("transform", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "white",
            height: "64px",
            display: "flex",
            alignItems: "center",
            padding: (theme) => theme.spacing(0, 1),
            ...(theme) => theme.mixins.toolbar,
            justifyContent: "center",
          }}
        />
        <Divider />
        <List
          sx={{
            padding: "8px",
            "& .MuiListItem-root": {
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "8px",
              paddingRight: "0px",
            },
          }}
        >
          {sideBarItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.path)}
                sx={{
                  backgroundColor:
                    selectedIndex === index ? "white" : "transparent",
                  borderRadius: "20px",
                  marginRight: "-25px",
                  paddingRight: "24px",
                  "&:hover": {
                    backgroundColor:
                      selectedIndex === index
                        ? "white"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedIndex === index
                        ? "#5D3998"
                        : item.color || "white",
                    minWidth: "36px",
                  }}
                >
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    "& .MuiTypography-root": {
                      color: selectedIndex === index ? "#5D3998" : "white",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Main open={open}>
        <Box></Box>
      </Main>
    </Root>
  );
}
