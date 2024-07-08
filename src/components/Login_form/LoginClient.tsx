import React from "react";

function login() {
  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            ระบบเลือกตั้ง
          </h1>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">
                  เลขประจำตัวนักเรียนนักศึกษา
                </span>
              </label>
              <input
                type="text"
                placeholder="เลขประจำตัวนักเรียนนักศึกษา"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <button className="btn btn-primary">เข้าสู่ละรบบ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
