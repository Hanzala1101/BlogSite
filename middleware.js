export default function middleware(){
    console.log("i am middleware")
}

export const config = {
    matcher: ['/api/auth/me']
}