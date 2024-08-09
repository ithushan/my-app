export async function GET(req) {
    const type = req.nextUrl.searchParams.get('type');
    console.log(type);
    return Response.json([{
        name: "Nokia",
        year: "2016"
    },
    {
        name: "Samsung",
        year: "2017"
    }
    ])
}

export async function POST(req) {
    const body = await req.json();
    console.log(body);
    
    return Response.json([{
       message:'some text message !'
    }
    ])
}