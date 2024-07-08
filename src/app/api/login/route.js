// นำเข้า NextResponse จาก next/server และ mysqlPool จาก utils/db
const { NextResponse } = require('next/server');
const { mysqlPool } = require('../../../../utils/db');
const { redirect } = require('next/dist/server/api-utils');

// ฟังก์ชัน GET สำหรับจัดการคำขอ GET
async function GET(request) {
  // แยกพารามิเตอร์ searchParams จาก URL ของคำขอ
  const { searchParams } = new URL(request.url, 'http://localhost');
  const studentId = searchParams.get('studentId'); // ดึง studentId จาก searchParams

  // ตรวจสอบว่าผู้ใช้ล็อกอินหรือยัง
  if (!studentId) {
    return NextResponse.json({ message: 'Missing studentId parameter' }, { status: 400 });
  }

  // คำสั่ง SQL เพื่อเลือกข้อมูลจากตาราง users โดยใช้ UserNumber
  const sql = 'SELECT * FROM users WHERE UserNumber = ?';

  try {
    // รันคำสั่ง SQL และรับผลลัพธ์
    const users = await mysqlPool.query(sql, [studentId]);

    // ตรวจสอบว่ามีผู้ใช้พบหรือไม่
    if (users.length > 0) {
      const user = users[0]; // เลือกผู้ใช้อันแรก
      const userRole = user.UserRole; // เข้าถึงค่าของคุณสมบัติ UserRole ของผู้ใช้

      // ตรวจสอบ UserRole และส่งคืนข้อความตามบทบาทของผู้ใช้
      if (userRole === 'admin') {
        return NextResponse.json({ message: 'Admin' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'User ' }, { status: 200 });
      }
    } else {
      // ถ้าไม่พบข้อมูลผู้ใช้ ส่งสถานะ 401 พร้อมข้อความแสดงข้อผิดพลาด
      return NextResponse.json({ message: 'ข้อมูลไม่ถูกต้อง' }, { status: 401 });
    }
  } catch (error) {
    // จัดการข้อผิดพลาดและส่งสถานะ 500 พร้อมข้อความแสดงข้อผิดพลาด
    console.error('Error in GET handler:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// ส่งออกฟังก์ชัน GET
module.exports = { GET };