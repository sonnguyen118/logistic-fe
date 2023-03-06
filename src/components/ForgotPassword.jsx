import React, { useState } from 'react';
import Layout from "./Layout";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <Helmet>
                <title>Lấy lại mật khẩu | LÊ PHƯƠNG - VẬN CHUYỂN VÀ ĐẶT HÀNG TRUNG - VIỆT</title>
            </Helmet>
            <Layout>
                <div className='login text-center'>
                    <div className="card">
                        <div className="card-header p-2">
                            Lấy lại mật khẩu
                        </div>{/* /.card-header */}
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane active" id="activity">
                                    <form>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-primary" type="submit">Gửi yêu cầu</button>
                                        <div className='d-flex mt-3 justify-content-between align-items-center'>
                                            <Link to={`/login?lable=1`}>
                                                <span className='login-forgotpass'>Đăng Nhập</span>
                                            </Link>
                                            <Link to={`/login?lable=2`}>
                                                <span className='login-forgotpass'>Đăng Ký</span>
                                            </Link>
                                        </div>
                                    </form>
                                </div>

                                {/* /.tab-pane */}
                            </div>
                            {/* /.tab-content */}
                        </div>{/* /.card-body */}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ForgotPassword