import React from "react";

function Vote() {
  return (
    <div>
      <div className="navbar bg-error">
        <div className="flex-1">
          <div className="w-14 rounded-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/vote-app-157a0.appspot.com/o/Untitled-1.png?alt=media&token=977e3f89-a74d-4214-8e43-fee2423c926f"
              alt="Logo"
            />
          </div>
          <h1 className="text-xl text-black px-2 font-bold">ระบบเลือกตั้ง</h1>
        </div>
      </div>

      <div className="flex flex-wrap mx-6 pt-6 justify-center">
        <h1 className="text-wrap text-black font-bold text-3xl">เลือกผู้สมัคร</h1>
      </div>

      {/*   ส่วนข้อมูลคนลงสมัคร */}

      <div className="flex flex-wrap mx-6 pt-6 justify-center">
        <div className="card bg-base-100 w-72 shadow-xl m-5">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Candidate 1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">เบอร์ 1</h2>
            <p>รายละเอียด</p>
            <div className="card-actions justify-end">
              <button className="btn text-white btn-primary">เลือก</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 shadow-xl m-5">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Candidate 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">เบอร์ 2</h2>
            <p>รายละเอียด</p>
            <div className="card-actions justify-end">
              <button className="btn text-white btn-primary">เลือก</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 shadow-xl m-5">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Candidate 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">เบอร์ 3</h2>
            <p>รายละเอียด</p>
            <div className="card-actions justify-end">
              <button className="btn text-white btn-primary">เลือก</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-72 shadow-xl m-5">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Candidate 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">เบอร์ 4</h2>
            <p>รายละเอียด</p>
            <div className="card-actions justify-end">
              <button className="btn text-white btn-primary">เลือก</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
