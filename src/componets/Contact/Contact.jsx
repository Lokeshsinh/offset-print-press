import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, AtSign, Smartphone, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handle);
        return () => window.removeEventListener('resize', handle);
    }, []);
    return width;
}

function Contact() {
    const width = useWindowWidth();
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [focusedField, setFocusedField] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hi, I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
        window.open(`https://wa.me/919419311049?text=${encodeURIComponent(message)}`, '_blank');
    };

    const contactInfo = [
        { icon: Phone, title: 'Mobile Numbers', details: ['9419311049', '7780905175'], link: 'tel:9419311049', bg: 'linear-gradient(135deg, #D3000F, #790E15)' },
        { icon: Phone, title: 'Office Phone', details: ['01923-293170'], link: 'tel:01923293170', bg: 'linear-gradient(135deg, #790E15, #D3000F)' },
        { icon: Mail, title: 'Email Address', details: ['rptraders48@gmail.com', 'rpsaini1@yahoo.com'], link: 'mailto:rptraders48@gmail.com', bg: 'linear-gradient(135deg, #D3000F, #790E15)' },
        { icon: MapPin, title: 'Our Location', details: ['Dogra Shopping Complex,', 'Industrial Chowk, Bari Brahmana, Jammu'], link: 'https://maps.google.com/?q=Dogra+Shopping+Complex+Bari+Brahmana+Jammu', bg: 'linear-gradient(135deg, #790E15, #D3000F)' },
    ];

    const inputStyle = (field) => ({
        width: '100%',
        padding: '14px 16px 14px 44px',
        border: `2px solid ${focusedField === field || formData[field] ? '#D3000F' : '#e5e7eb'}`,
        borderRadius: '16px',
        fontSize: '14px',
        outline: 'none',
        fontFamily: 'inherit',
        backgroundColor: focusedField === field ? '#fff' : '#f9fafb',
        transition: 'all 0.2s',
        boxShadow: focusedField === field ? '0 0 0 4px rgba(211,0,15,0.08)' : 'none',
        boxSizing: 'border-box',
    });

    return (
        <section style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f9fafb, #fff, #f9fafb)',
            paddingTop: isMobile ? '100px' : '120px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden',
        }}>

            {/* Background blobs */}
            {!isMobile && <>
                <div style={{ position: 'absolute', top: '80px', right: '40px', width: '380px', height: '380px', background: 'rgba(211,0,15,0.04)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '80px', left: '40px', width: '380px', height: '380px', background: 'rgba(121,14,21,0.04)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
            </>}

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 30px', position: 'relative', zIndex: 1 }}>

                {/* Heading */}
                <motion.div
                    style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '80px' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: 'linear-gradient(to right, #fff1f2, #ffe4e6)', borderRadius: '999px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#D3000F', borderRadius: '50%' }} />
                        <p style={{ color: '#D3000F', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>Get In Touch</p>
                    </motion.div>

                    <h1 style={{ fontSize: isMobile ? '40px' : isTablet ? '56px' : '80px', fontWeight: 900, color: '#111', marginBottom: '20px', lineHeight: 1.1, letterSpacing: isMobile ? '-1px' : '-2px' }}>
                        Contact <span style={{ background: 'linear-gradient(135deg, #D3000F, #790E15)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Us</span>
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
                        <div style={{ width: '48px', height: '4px', background: 'linear-gradient(to right, transparent, #D3000F)', borderRadius: '999px' }} />
                        <div style={{ width: '80px', height: '6px', background: 'linear-gradient(to right, #D3000F, #790E15)', borderRadius: '999px' }} />
                        <div style={{ width: '48px', height: '4px', background: 'linear-gradient(to left, transparent, #790E15)', borderRadius: '999px' }} />
                    </div>

                    <p style={{ color: '#6b7280', fontSize: isMobile ? '15px' : '18px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontWeight: 500 }}>
                        Ready to start your printing project? Get in touch for a quick quote.
                    </p>
                </motion.div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '24px' : '40px',
                    marginBottom: '80px',
                }}>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div style={{ backgroundColor: '#fff', borderRadius: '28px', padding: isMobile ? '24px' : '48px', boxShadow: '0 25px 60px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '160px', background: 'radial-gradient(circle at top right, rgba(211,0,15,0.08), transparent)', borderBottomLeftRadius: '100%' }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #D3000F, #790E15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Send size={20} color="#fff" />
                                    </div>
                                    <h2 style={{ fontSize: isMobile ? '20px' : '28px', fontWeight: 900, color: '#111', margin: 0 }}>Send a Message</h2>
                                </div>
                                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '28px', marginLeft: '54px' }}>Fill out the form and we'll get back to you soon</p>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                                    {/* Name */}
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
                                            <User size={17} color={focusedField === 'name' || formData.name ? '#D3000F' : '#9ca3af'} />
                                        </div>
                                        <input type="text" name="name" required placeholder="Your Full Name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField('')} style={inputStyle('name')} />
                                    </div>

                                    {/* Email + Phone */}
                                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                                                <AtSign size={17} color={focusedField === 'email' || formData.email ? '#D3000F' : '#9ca3af'} />
                                            </div>
                                            <input type="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} style={inputStyle('email')} />
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                                                <Smartphone size={17} color={focusedField === 'phone' || formData.phone ? '#D3000F' : '#9ca3af'} />
                                            </div>
                                            <input type="tel" name="phone" required placeholder="Phone Number" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField('')} style={inputStyle('phone')} />
                                        </div>
                                    </div>

                                    {/* Service */}
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                                            <Briefcase size={17} color={focusedField === 'service' || formData.service ? '#D3000F' : '#9ca3af'} />
                                        </div>
                                        <select name="service" required value={formData.service} onChange={handleChange} onFocus={() => setFocusedField('service')} onBlur={() => setFocusedField('')} style={{ ...inputStyle('service'), cursor: 'pointer', appearance: 'none' }}>
                                            <option value="">Select a Service</option>
                                            <option>Offset Printing</option>
                                            <option>Screen Printing</option>
                                            <option>Digital Printing</option>
                                            <option>Stationery Supply</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <textarea name="message" required rows={isMobile ? 4 : 5} placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField('')}
                                        style={{ width: '100%', padding: '14px 16px', border: `2px solid ${focusedField === 'message' ? '#D3000F' : '#e5e7eb'}`, borderRadius: '16px', fontSize: '14px', outline: 'none', fontFamily: 'inherit', backgroundColor: focusedField === 'message' ? '#fff' : '#f9fafb', resize: 'none', transition: 'all 0.2s', boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(211,0,15,0.08)' : 'none', boxSizing: 'border-box' }}
                                    />

                                    {/* Submit */}
                                    <button type="submit"
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'linear-gradient(135deg, #D3000F, #790E15)', color: '#fff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 20px rgba(211,0,15,0.3)', width: '100%' }}
                                        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(211,0,15,0.4)'; }}
                                        onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(211,0,15,0.3)'; }}
                                    >
                                        <MessageCircle size={20} />
                                        Send via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
                        initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={info.title}
                                href={info.link}
                                target={info.icon === MapPin ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: '#fff', border: '2px solid #f3f4f6', borderRadius: '20px', padding: isMobile ? '16px' : '22px', textDecoration: 'none', transition: 'all 0.3s' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = 'rgba(211,0,15,0.3)'; }}
                                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f3f4f6'; }}
                            >
                                <div style={{ width: '52px', height: '52px', background: info.bg, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 8px 20px rgba(211,0,15,0.25)' }}>
                                    <info.icon size={22} color="#fff" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111', marginBottom: '5px' }}>{info.title}</h4>
                                    {info.details.map((d, idx) => <p key={idx} style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{d}</p>)}
                                </div>
                            </motion.a>
                        ))}

                        {/* Business Hours */}
                        <motion.div
                            style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: 'linear-gradient(135deg, #1a1a1a, #000)', borderRadius: '20px', padding: isMobile ? '16px' : '22px' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                        >
                            <div style={{ width: '52px', height: '52px', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Clock size={22} color="#fff" strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Business Hours</h4>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Sunday: Closed</p>
                            </div>
                        </motion.div>

                        {/* Contact Person */}
                        <motion.div
                            style={{ background: 'linear-gradient(135deg, #fff1f2, #fff, #fff1f2)', border: '2px solid rgba(211,0,15,0.3)', borderRadius: '20px', padding: isMobile ? '16px' : '22px', position: 'relative', overflow: 'hidden' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.9 }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', background: 'radial-gradient(circle at top left, rgba(211,0,15,0.15), transparent)', borderBottomRightRadius: '100%' }} />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#D3000F', color: '#fff', padding: '4px 12px', borderRadius: '999px', marginBottom: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }} />
                                    <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Contact Person</p>
                                </div>
                                <p style={{ fontSize: '20px', fontWeight: 900, color: '#111', marginBottom: '4px' }}>Ram Paul</p>
                                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Feel free to reach out directly for personalized assistance.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    style={{ position: 'relative', paddingTop: '30px' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
                        <div style={{ backgroundColor: '#fff', padding: '10px 22px', borderRadius: '999px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '2px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                            <MapPin size={16} color="#D3000F" />
                            <span style={{ fontWeight: 700, fontSize: '13px', color: '#111' }}>Find Us Here</span>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: isMobile ? '280px' : '500px', borderRadius: '24px', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.5!2d74.8!3d32.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM2JzAwLjAiTiA3NMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%" height="100%" style={{ border: 0 }}
                            allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Saini Offset Printing Press Location"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Contact;