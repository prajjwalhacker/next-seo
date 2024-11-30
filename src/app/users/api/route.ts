import users from '../../db.json';
export async function GET() {
    return Response.json(users);
}