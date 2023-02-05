import React from 'react';

const LoginPage = () => {
    return (
        <div className='login-div'>
            <p>تسجيل الدخول</p>
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">اسم المستخدم</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">كلمة المرور</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-success">تسجيل الدخول</button>
</form>
</div>
    );
}

export default LoginPage;
