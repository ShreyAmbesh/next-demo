import {Box, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import prisma from "@/db";
import Link from "next/link";

export default async function Users() {
    const users = await prisma.user.findMany({});
    return (
        <Box>
            <Typography variant="h1">Users</Typography>
            <List>
                {users.map(usr => (
                    <ListItem key={usr.id}>
                        <Link href={`/users/${usr.id}`}>
                            <ListItemButton>
                                <ListItemText primary={usr.name} secondary={usr.email}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}