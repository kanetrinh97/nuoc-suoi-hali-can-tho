/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Droplets, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Menu, 
  X,
  ChevronRight,
  Instagram,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BUSINESS_INFO = {
  name: "Nước suối HALI Cần Thơ",
  address: "G3-1 Cao Minh Lộc, KDC 586, Quận Cái Răng, TP. Cần Thơ",
  phone: "0913 619 045",
  status: "Luôn mở cửa",
  services: "Nước uống đóng chai",
  facebook: "https://www.facebook.com/nuocsuoihalicantho",
  slogan: "Giao sỉ – giao lẻ tận nơi, sạch – nhanh – luôn đủ hàng"
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm">
              <img 
                src={logo} 
                alt="Nước suối HALI Cần Thơ Logo" 
                className="w-full h-full object-contain"
                />
            </div>
            <span className={`font-bold text-lg md:text-xl tracking-tight leading-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              Nước suối <br className="md:hidden" /> HALI Cần Thơ
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
            >
              <Phone size={16} />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Phone size={18} />
                  Gọi ngay: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=2000" 
          alt="Pure Water Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-blue-100 text-sm font-medium mb-6">
            <CheckCircle2 size={16} className="text-blue-400" />
            Nước uống đóng chai chuẩn chất lượng
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Nước suối <br />
            <span className="text-blue-400">HALI Cần Thơ</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-blue-200 mb-6 italic">
            "{BUSINESS_INFO.slogan}"
          </p>
          <p className="text-lg md:text-xl text-blue-50/90 mb-10 leading-relaxed max-w-xl">
            Nước suối HALI Cần Thơ mang đến nguồn nước uống đóng chai mát lành, đảm bảo an toàn vệ sinh thực phẩm cho gia đình và doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Xem sản phẩm
              <ChevronRight size={20} />
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-blue-600/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Đặt hàng ngay
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-white/80">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">HALI</span>
              <span className="text-xs uppercase tracking-wider">Đóng chai</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-xs uppercase tracking-wider">Phục vụ</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Cần Thơ</span>
              <span className="text-xs uppercase tracking-wider">Giao nhanh</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Chất Lượng Kiểm Định",
      description: "Quy trình sản xuất hiện đại, loại bỏ tạp chất, giữ lại sự thanh khiết tự nhiên của nước uống đóng chai."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Giao Hàng Tận Nơi",
      description: "Đội ngũ giao hàng chuyên nghiệp, nhanh chóng tại khu vực Cần Thơ: Sạch – Nhanh – Luôn đủ hàng."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Luôn Mở Cửa",
      description: "Nước suối HALI Cần Thơ sẵn sàng phục vụ nhu cầu nước uống của bạn bất kể thời gian nào."
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Đa Dạng Kích Cỡ",
      description: "Cung cấp đầy đủ các loại chai từ 250ml đến bình 20L phù hợp mọi nhu cầu sỉ và lẻ."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Tại sao chọn HALI?</h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Cam Kết Mang Lại Nguồn Nước Tốt Nhất Cho Sức Khỏe</p>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const productCategories = [
    {
      title: "Dòng Chai Nhỏ & Vừa",
      items: ["Chai 250ml", "Chai 330ml", "Chai 0.5L", "Chai 1.5L"],
      icon: <Droplets className="text-blue-500" />
    },
    {
      title: "Dòng Bình Lớn",
      items: ["Bình 5L", "Bình 7.5L", "Bình 19L", "Bình 20L"],
      icon: <Truck className="text-blue-500" />
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Sản phẩm của chúng tôi</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900">Nước suối HALI Cần Thơ Đầy Đủ & Đa Dạng</p>
            <p className="mt-4 text-slate-600 italic">"{BUSINESS_INFO.slogan}"</p>
          </div>
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
          >
            Liên hệ đặt hàng sỉ & lẻ
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between group hover:border-blue-200 transition-colors">
                    <span className="font-semibold text-slate-700">{item}</span>
                    <CheckCircle2 size={18} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white text-center">
          <p className="text-xl font-medium mb-4">Mọi sản phẩm đều được kiểm soát chất lượng nghiêm ngặt</p>
          <p className="text-blue-100">Giao hàng tận nơi nhanh chóng – Luôn sẵn sàng phục vụ quý khách tại Cần Thơ</p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Liên hệ với chúng tôi</h2>
            <p className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Bạn Cần Nước Uống Đóng Chai? <br />Hãy Gọi Cho HALI!</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30">
                  <MapPin className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Địa chỉ văn phòng</h4>
                  <p className="text-slate-400 leading-relaxed">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30">
                  <Phone className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Hotline đặt hàng</h4>
                  <p className="text-3xl font-bold text-blue-400">{BUSINESS_INFO.phone}</p>
                  <p className="text-slate-400">Hỗ trợ 24/7 - Giao hàng nhanh chóng</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30">
                  <Clock className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Giờ làm việc</h4>
                  <p className="text-slate-400">{BUSINESS_INFO.status}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a 
                href={BUSINESS_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group"
              >
                <Facebook className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Instagram className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group">
                <Mail className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-white p-1">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Nước suối HALI Cần Thơ
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-white transition-colors">Trang chủ</a>
            <a href="#about" className="hover:text-white transition-colors">Về chúng tôi</a>
            <a href="#products" className="hover:text-white transition-colors">Sản phẩm</a>
            <a href="#contact" className="hover:text-white transition-colors">Liên hệ</a>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
