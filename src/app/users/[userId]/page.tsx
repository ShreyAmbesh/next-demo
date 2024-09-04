import {Box, Typography} from "@mui/material";
import prisma from "@/db";

export default async function Home({params: {userId}}: { params: { userId: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    }).catch(e => null);
    if (user) {
        return (
            <Box>
                <Typography variant="h1">User Page</Typography>
                <Typography variant="h2">{user.name}</Typography>
                <Typography variant="h2">{user.email}</Typography>
            </Box>
        );
    } else {
        return (
            <Typography variant="h1">User Not Found</Typography>
        );
    }
}