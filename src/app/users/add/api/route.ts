import prisma from "@/db";

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if(userExists){
        return Response.json({ message: "User already exists" }, {status: 400});
    }
    await prisma.user.create({
       data: {
           name: body.name,
           email: body.email
       }
    });
    return Response.json({ message: "User Created" });
}