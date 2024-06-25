import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from './redux/actions/auth.action';
import { FaEnvelope, FaKey } from 'react-icons/fa';

// Define logo URL and sign logo URL
const logoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg';
const signBackgroundUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg';
const signLogoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png';

const SignupScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = async (values) => {
    setLoading(true);
    await dispatch(login(values.username, values.password));
    setLoading(false);
    if (user) {
      navigate('/home');
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 relative">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={signBackgroundUrl} alt="Sign Background" className="w-full h-full object-cover opacity-5" />
      </div>

      {/* Content */}
      <div className="z-10 relative flex flex-col items-center py-8 max-w-md w-full">
        <img src={logoUrl} alt="Cursus Logo" style={{ width: '135px', height: '32px' }} />

        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full">
          <h2 className="text-2xl font-bold mb-2 text-center text-black">Welcome to Cursus</h2>
          <p className="text-center mb-3 text-sm">Sign Up and Start Learning!</p>

          {/* Sign Up Form */}
          <Form onFinish={handleLogin} className="w-full">
            <Form.Item name="fullname" rules={[{ required: true, message: 'Please input your full name!' }]}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Checkbox>
                <span className="text-xs">I'm in for emails with exciting discounts and personalized recommendations</span>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Next
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center my-2 text-xs" style={{ marginBottom: '40px' }}>
            <span className="text-black">By signing up, you agree to our</span>
            <a href="/terms-of-use" className="text-red-500 ml-1">
              Terms of Use
            </a>
            <span className="text-black"> and</span>
            <a href="/privacy-policy" className="text-red-500 ml-1">
              Privacy Policy
            </a>
            <span className="text-black">.</span>
          </p>

          <p className="text-center my-4 text-xs">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={goToLogin}>
              Log In
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center mb-auto z-10">
        <img src={signLogoUrl} alt="Sign Logo" style={{ height: '40px', display: 'inline-block', marginRight: '8px' }} />
        <p className="text-sm inline-block">© 2024 Cursus. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default SignupScreen;
