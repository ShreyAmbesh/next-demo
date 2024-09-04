import {NextRequest, NextResponse} from "next/server";


export function middleware(req: NextRequest) {
  console.log('MIDDLEWARE', req.url);
  return NextResponse.next();
}

