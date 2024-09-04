import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import Link from "next/link";
import {People, PersonAdd} from "@mui/icons-material";

export default function Home() {
  return (
      <Box>
      <Typography variant="h1">Home Page</Typography>
        <List>
          <ListItem>
            <Link href="/users">
              <ListItemButton>
                <ListItemIcon>
                  <People/>
                </ListItemIcon>
                <ListItemText primary="Users"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/users/add">
              <ListItemButton>
                <ListItemIcon>
                  <PersonAdd/>
                </ListItemIcon>
                <ListItemText primary="Add User"/>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
  );
}
