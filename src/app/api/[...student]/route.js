import { NextResponse } from 'next/server';

export async function GET(request, content) {
    const studentDetail = content.params.student;
    return NextResponse.json({ Detail: studentDetail, error: false })
}
