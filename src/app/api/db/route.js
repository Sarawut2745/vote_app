// app/api/db/route.js
const { NextResponse } = require('next/server');
const { executeQuery } = require('../../../../utils/db');

async function GET(request) {
  try {
    const rows = await executeQuery('SELECT * FROM users');
    return NextResponse.json({ rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

module.exports = { GET };
