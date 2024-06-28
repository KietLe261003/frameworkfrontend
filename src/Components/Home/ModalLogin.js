import React, { useState } from "react";
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        zIndex: 1000,
        backgroundColor: 'transparent', // Nền trong suốt
    },
    overlay: {
        backgroundColor: 'rgba(153, 152, 152 , 30%)', // Đặt màu nền và độ mờ
        zIndex: 999, // Đảm bảo overlay nằm dưới modal
    },
};
function ModalLogin() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    const [showPassword, setShowPassword] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>Login</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className=" w-[611px] h-[725px] bg-white rounded-3xl  flex items-center justify-center flex-col">
                    <div className="w-[352px] h-[58px] flex items-center justify-center">
                        <p className="font-semibold text-[40px] text-gray-800 mb-7">Hi!! Wellcome Back</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className=" w-[380px] h-[72px]">
                            <input
                                className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className="relative w-[380px] h-[72px] flex items-center">
                            <input
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                            />
                            <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                                <svg
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={`h-4 text-purple-700 ${showPassword ? "hidden" : "block"}`}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                    />
                                </svg>
                                <svg
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={`h-4 text-purple-700 ${showPassword ? "block" : "hidden"}`}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex w-[380px] justify-start mb-[30px]">
                            <div className="text-sm">
                                <a href="/" className="text-red-700 hover:text-red-600 text-[16px]">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div className="flex w-[182px] h-[58px] justify-center items-center mb-[35px]">
                            <button
                                type="submit"
                                className="w-full flex justify-center bg-red-800 hover:bg-red-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                            >
                                Sign in
                            </button>
                        </div>
                        <div className="flex items-center justify-center space-x-2 my-5 mb-[35px]">
                            <span className="text-black font-semibold text-[24px]">Or</span>
                        </div>
                        <div className="flex justify-center gap-5 w-full">
                            <button
                                type="submit"
                                className="w-[50px] h-[70px] mr-[50px] flex items-center justify-center mb-6 md:mb-0  hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
                            >
                                <svg
                                    className="w-[50px] h-[70px] mr-2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#EA4335"
                                        d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                                    />
                                    <path
                                        fill="#4A90E2"
                                        d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.277 14.268A7.12 7.12 0 0 1 4.91 12c0-.79.137-1.555.352-2.268L1.236 6.617A11.947 11.947 0 0 0 0 12c0 1.897.434 3.693 1.236 5.383l4.041-3.115Z"
                                    />
                                </svg>
                            </button>
                            <button
                                type="submit"
                                className="w-[50px] h-[70px] ml-[50px] flex items-center justify-center mb-6 md:mb-0 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
                            >
                                <svg className="w-[50px] h-[70px] mr-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                    <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
                                    <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center space-x-2 my-5 mb-[35px]">
                            <span className="text-black text-[24px]">New to Aution Table? SignUp</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalLogin;