import React, { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "register";
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(`${type} form submitted:`, formData);
    onClose();
  };

  // Social icons
  const SocialIcons = () => (
    <div className="flex items-center justify-center gap-3 mt-6">
      {/* Google */}
      <button className="w-10 h-10 bg-gaming-expander rounded-lg flex items-center justify-center hover:bg-gaming-accent transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.6265 11.19H12.3735V13.647H18.2325C17.9355 17.076 15.0825 18.543 12.3825 18.543C8.93549 18.543 5.91149 15.825 5.91149 12C5.91149 8.31 8.79149 5.457 12.3915 5.457C15.1725 5.457 16.8015 7.23 16.8015 7.23L18.5115 5.448C18.5115 5.448 16.3155 3 12.3015 3C7.1895 3 3.23849 7.32 3.23849 12C3.23849 16.545 6.95549 21 12.4365 21C17.2515 21 20.7615 17.697 20.7615 12.819C20.7615 11.784 20.6265 11.19 20.6265 11.19Z"
            fill="#5C7CA9"
          />
        </svg>
      </button>

      {/* Facebook */}
      <button className="w-10 h-10 bg-gaming-expander rounded-lg flex items-center justify-center hover:bg-gaming-accent transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C7.0301 3 2.96384 7.05723 2.96384 12.0542C2.96384 16.5723 6.27106 20.3223 10.5903 21V14.6747H8.29516V12.0542H10.5903V10.0572C10.5903 7.78916 11.9367 6.54217 14.006 6.54217C14.9909 6.54217 16.0211 6.71386 16.0211 6.71386V8.94578H14.8825C13.762 8.94578 13.4096 9.64157 13.4096 10.3554V12.0542H15.9217L15.515 14.6747H13.4096V21C15.5389 20.6637 17.4779 19.5773 18.8764 17.9368C20.275 16.2963 21.041 14.2099 21.0361 12.0542C21.0361 7.05723 16.9699 3 12 3Z"
            fill="#5C7CA9"
          />
        </svg>
      </button>

      {/* Discord */}
      <button className="w-10 h-10 bg-gaming-expander rounded-lg flex items-center justify-center hover:bg-gaming-accent transition-colors">
        <svg width="20" height="16" viewBox="0 0 23 18" fill="none">
          <path
            d="M17.2612 3.22461C17.2562 3.21436 17.2479 3.20633 17.2378 3.20196C16.0708 2.6358 14.8392 2.23211 13.5739 2.00098C13.5624 1.99874 13.5506 2.00038 13.54 2.00566C13.5295 2.01095 13.5207 2.01961 13.5151 2.03043C13.3474 2.35226 13.1952 2.68281 13.059 3.02083C11.6951 2.80196 10.3077 2.80196 8.94386 3.02083C8.80674 2.68195 8.65207 2.35132 8.48054 2.03043C8.47465 2.01983 8.46589 2.01136 8.45538 2.0061C8.44488 2.00085 8.43312 1.99906 8.42164 2.00098C7.15624 2.23165 5.9246 2.63538 4.75771 3.20199C4.74771 3.20644 4.73927 3.21409 4.73359 3.22387C2.40004 6.90837 1.76079 10.5023 2.07438 14.0517C2.07527 14.0604 2.0778 14.0688 2.08183 14.0764C2.08585 14.0841 2.09128 14.0908 2.0978 14.0962C3.45662 15.1599 4.97645 15.9719 6.59246 16.4974C6.60384 16.501 6.61599 16.5009 6.62728 16.4969C6.63857 16.493 6.64846 16.4856 6.65561 16.4755C7.00272 15.9762 7.31027 15.4475 7.57512 14.8947C7.57876 14.8871 7.58083 14.8788 7.58121 14.8703C7.58159 14.8618 7.58027 14.8533 7.57732 14.8454C7.57437 14.8375 7.56987 14.8303 7.56412 14.8244C7.55836 14.8184 7.55148 14.8139 7.54392 14.8109C7.05894 14.6148 6.58943 14.3783 6.1398 14.1036C6.13163 14.0986 6.12477 14.0914 6.11982 14.0829C6.11488 14.0743 6.112 14.0646 6.11144 14.0546C6.11088 14.0446 6.11265 14.0347 6.11661 14.0256C6.12057 14.0164 6.12659 14.0085 6.13413 14.0025C6.22875 13.9277 6.32172 13.8507 6.41298 13.7715C6.42099 13.7645 6.43067 13.76 6.44095 13.7586C6.45122 13.7571 6.46168 13.7587 6.47114 13.7632C9.41694 15.1846 12.6062 15.1846 15.5171 13.7632C15.5266 13.7584 15.5371 13.7566 15.5476 13.7579C15.558 13.7592 15.5679 13.7637 15.576 13.7707C15.6674 13.8504 15.7606 13.9277 15.8555 14.0025C15.8631 14.0085 15.8692 14.0163 15.8732 14.0254C15.8772 14.0345 15.8791 14.0444 15.8786 14.0544C15.8781 14.0644 15.8753 14.0742 15.8704 14.0827C15.8655 14.0913 15.8587 14.0985 15.8506 14.1036C15.402 14.3805 14.932 14.6169 14.4458 14.8102C14.4382 14.8132 14.4314 14.8179 14.4257 14.824C14.4199 14.83 14.4155 14.8372 14.4126 14.8452C14.4097 14.8532 14.4084 14.8617 14.4089 14.8702C14.4093 14.8788 14.4115 14.8871 14.4152 14.8947C14.6845 15.4444 14.9916 15.9725 15.334 16.4747C15.3409 16.485 15.3507 16.4927 15.3621 16.4968C15.3734 16.5008 15.3857 16.501 15.3971 16.4973C17.016 15.9736 18.5385 15.1616 19.899 14.0962C19.9057 14.0911 19.9112 14.0845 19.9152 14.077C19.9193 14.0694 19.9217 14.0611 19.9225 14.0524C20.2979 9.94895 19.2939 6.38449 17.2612 3.22461Z"
            fill="#5C7CA9"
          />
        </svg>
      </button>

      {/* Steam */}
      <button className="w-10 h-10 bg-gaming-expander rounded-lg flex items-center justify-center hover:bg-gaming-accent transition-colors">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1C11.1819 1 12.3522 1.23279 13.4442 1.68508C14.5361 2.13738 15.5282 2.80031 16.364 3.63604C17.1997 4.47177 17.8626 5.46392 18.3149 6.55585C18.7672 7.64778 19 8.8181 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C5.86 19 2.395 16.228 1.324 12.457L4.771 13.879C4.88911 14.4555 5.20254 14.9736 5.65837 15.3458C6.11421 15.718 6.68451 15.9215 7.273 15.922C8.677 15.922 9.82 14.779 9.82 13.375V13.258L12.88 11.071H12.952C14.824 11.071 16.345 9.55 16.345 7.678C16.345 5.806 14.824 4.285 12.952 4.285C11.08 4.285 9.55 5.806 9.55 7.678V7.723L7.417 10.837L7.273 10.828C6.742 10.828 6.247 10.99 5.842 11.269L1 9.28C1.387 4.645 5.257 1 10 1Z"
            fill="#5C7CA9"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gaming-card rounded-lg shadow-gaming-strong w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gaming-accent hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-white font-pixelify text-2xl font-bold mb-2">
              {type === "login" ? "Welcome Back" : "Join bozo.win"}
            </h2>
            <p className="text-gaming-accent font-hanken">
              {type === "login"
                ? "Sign in to your account"
                : "Create your gaming account"}
            </p>
          </div>

          {/* Social Login */}
          <div>
            <p className="text-white font-hanken text-sm text-center mb-4">
              {type === "login" ? "Sign in with" : "Sign up with"}
            </p>
            <SocialIcons />
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gaming-accent opacity-30"></div>
            <span className="px-4 text-gaming-accent font-hanken text-sm">
              or
            </span>
            <div className="flex-1 h-px bg-gaming-accent opacity-30"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-hanken text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gaming-expander border border-gaming-accent rounded-lg text-white font-hanken placeholder-gaming-accent focus:outline-none focus:border-gaming-button transition-colors"
                placeholder="Enter your username"
                required
              />
            </div>

            {type === "register" && (
              <div>
                <label className="block text-white font-hanken text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gaming-expander border border-gaming-accent rounded-lg text-white font-hanken placeholder-gaming-accent focus:outline-none focus:border-gaming-button transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-white font-hanken text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gaming-expander border border-gaming-accent rounded-lg text-white font-hanken placeholder-gaming-accent focus:outline-none focus:border-gaming-button transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            {type === "register" && (
              <div>
                <label className="block text-white font-hanken text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gaming-expander border border-gaming-accent rounded-lg text-white font-hanken placeholder-gaming-accent focus:outline-none focus:border-gaming-button transition-colors"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {type === "login" && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-gaming-button bg-gaming-expander border-gaming-accent rounded focus:ring-gaming-button"
                  />
                  <span className="ml-2 text-gaming-accent font-hanken text-sm">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-gaming-link font-hanken text-sm hover:text-white transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gaming-button rounded-lg text-white font-hanken text-lg font-bold hover:bg-opacity-80 transition-all shadow-gaming"
            >
              {type === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gaming-accent font-hanken text-sm">
              {type === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                onClick={() => {
                  // Switch between login and register
                  // This would be handled by the parent component
                }}
                className="text-gaming-link hover:text-white transition-colors font-bold"
              >
                {type === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
