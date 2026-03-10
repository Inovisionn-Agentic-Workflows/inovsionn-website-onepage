import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Terminal, Activity, Zap, Beaker, CheckCircle2, ChevronRight, Calendar, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { CoreSpinLoader } from './components/ui/core-spin-loader';
import RadialPulseLoader from './components/ui/loading-animation';
import NeuralBackground from './components/ui/flow-field-background';
import LeadScanner from './LeadScanner';
gsap.registerPlugin(ScrollTrigger);

// --- Component: Navbar ---
const Navbar = () => {
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: {
                    className: 'scrolled-nav',
                    targets: navRef.current
                }
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full md:rounded-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-500 text-white
                 [&:not(.scrolled-nav)]:bg-transparent
                 [&.scrolled-nav]:bg-background/90 [&.scrolled-nav]:backdrop-blur-xl [&.scrolled-nav]:text-primary [&.scrolled-nav]:shadow-lg [&.scrolled-nav]:border [&.scrolled-nav]:border-primary/10"
        >
            <div className="font-bold text-lg md:text-xl tracking-tighter uppercase font-heading flex items-center gap-2 md:gap-3">
                <img
                    src="/logo-full.png"
                    alt="Inovisionn Logo"
                    className="h-8 md:h-12 w-auto object-contain"
                    style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))' }}
                />
                <span className="hidden xs:inline">Inovisionn</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm">
                <a href="#ai-teams" className="link-lift">AI-Teams</a>
                <a href="#contact" className="link-lift">Contact</a>
                <a href="#werkwijze" className="link-lift">werkwijze</a>
            </div>

            <div className="flex items-center gap-2">
                <a href="#start" className="btn-magnetic overflow-hidden relative group inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-accent text-primary font-semibold text-xs md:text-sm shadow-md">
                    <span className="relative z-10 flex items-center gap-1.5 md:gap-2">Start demo <ChevronRight size={14} className="md:size-4" /></span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-accent/10 rounded-full text-accent transition-all hover:bg-accent/20"
                >
                    <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                    <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-background/98 backdrop-blur-3xl z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center justify-center gap-10 text-primary md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-primary/40 hover:text-primary transition-colors">
                    <span className="text-2xl font-light">✕</span>
                </button>
                <div className="flex flex-col items-center gap-8">
                    <a href="#ai-teams" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold font-heading hover:text-accent transition-colors">AI-Teams</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold font-heading text-[#3B82F6] hover:opacity-80 transition-all">Contact</a>
                    <a href="#werkwijze" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold font-heading text-[#3B82F6] hover:opacity-80 transition-all">Werkwijze</a>
                </div>
            </div>
        </nav>
    );
};

// --- Component: Hero ---
function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden bg-primary flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-16">
            <div className="absolute inset-0 z-0">
                <video
                    src="/assets/hero_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl text-white">
                <div className="overflow-hidden mb-1 md:mb-2">
                    <h1 className="hero-elem text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2 leading-tight">
                        Maximale productiviteit
                    </h1>
                </div>
                <div className="overflow-hidden mb-8 md:mb-10">
                    <h2 className="hero-elem text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-drama italic text-accent leading-none">
                        door geavanceerde AI-workflows.
                    </h2>
                </div>
                <div className="hero-elem flex flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-center">
                    <a href="#start" className="btn-magnetic group relative overflow-hidden inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 rounded-[1.5rem] md:rounded-[2rem] bg-accent text-primary font-bold text-base md:text-lg">
                        <span className="relative z-10 flex items-center gap-2">Ontdek je tijdwinst <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    </a>
                    <p className="text-white/60 font-data text-xs md:text-sm max-w-[280px] md:max-w-xs border-l border-white/20 pl-4 py-1">
                        Laat slimme software dagelijkse processen stroomlijnen. Zo komt er meer tijd vrij voor werk dat écht impact maakt.
                    </p>
                </div>
            </div>
        </section>
    );
}

// --- Feature Components ---

const DiagnosticShuffler = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Data-extractie', color: 'bg-primary', text: 'white' },
        { id: 2, title: 'Document-analyse', color: 'bg-dark', text: 'white' },
        { id: 3, title: 'CRM Registratie', color: 'bg-accent', text: 'primary' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-40 md:h-48 w-full max-w-[280px] sm:max-w-sm mx-auto perspective-1000 mt-6 md:mt-8">
            {cards.map((card, i) => (
                <div
                    key={card.id}
                    className={`absolute top-0 left-0 w-full p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-dark/5 transition-all duration-[800ms] ${card.color} text-${card.text} ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-between`}
                    style={{
                        transform: `translateY(${i * 8}px) scale(${1 - i * 0.04})`,
                        zIndex: cards.length - i,
                        opacity: 1 - i * 0.2
                    }}
                >
                    <div className="font-bold text-sm md:text-base flex items-center gap-2 md:gap-3"><Activity size={18} className="md:size-5 opacity-80" /> {card.title}</div>
                    <div className="font-data text-[10px] md:text-xs opacity-60">sys_ok</div>
                </div>
            ))
            }
        </div >
    );
};

const TelemetryTypewriter = () => {
    const [text, setText] = useState('');
    const fullText = "Human-in-the-loop actief.\\nProcessen optimaliseren...\\nFoutmarge geminimaliseerd.";

    useEffect(() => {
        let i = 0;
        let isTyping = false;

        const typeWriter = () => {
            if (i < fullText.length) {
                setText(prev => prev + fullText.charAt(i));
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 30);
            } else {
                setTimeout(() => { i = 0; setText(''); typeWriter(); }, 4000);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isTyping) {
                isTyping = true;
                i = 0;
                setText('');
                typeWriter();
            }
        });

        const el = document.getElementById('telemetry-terminal');
        if (el) observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="telemetry-terminal" className="mt-6 md:mt-8 bg-primary rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 text-white text-xs md:text-sm font-data shadow-xl relative overflow-hidden h-40 md:h-48 flex flex-col">
            <div className="absolute top-0 left-0 w-full px-4 md:px-6 py-2.5 md:py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/50"><Terminal size={12} className="md:size-3.5" /> telemetry_log.sh</div>
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-accent"><span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse"></span> Live Feed</div>
            </div>
            <div className="mt-10 md:mt-12 text-white/80 whitespace-pre-line leading-relaxed">
                <span className="text-accent">{'> '}</span>{text}
                <span className="inline-block w-1.5 md:w-2 bg-accent animate-pulse ml-1">&nbsp;</span>
            </div>
        </div>
    );
};

const CursorProtocolScheduler = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const buttonRef = useRef(null);
    const dayRef = useRef(null);
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.set(cursorRef.current, { x: 300, y: 150, opacity: 0, scale: 1 })
                .set(buttonRef.current, { scale: 1 })
                .to(cursorRef.current, { opacity: 1, duration: 0.5 })
                .to(cursorRef.current, {
                    x: () => dayRef.current?.offsetLeft + 10 || 150,
                    y: () => dayRef.current?.offsetTop + 10 || 50,
                    duration: 1,
                    ease: "power2.inOut"
                })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .call(() => setActiveDay(3))
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(cursorRef.current, {
                    x: () => buttonRef.current?.offsetLeft + 20 || 200,
                    y: () => buttonRef.current?.offsetTop + 10 || 150,
                    duration: 0.8,
                    ease: "power2.inOut",
                    delay: 0.2
                })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(buttonRef.current, { scale: 0.95, duration: 0.1 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(buttonRef.current, { scale: 1, duration: 0.1 }, "<")
                .to(cursorRef.current, { opacity: 0, x: '+=30', y: '+=30', duration: 0.5, delay: 0.2 })
                .call(() => setActiveDay(null));

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div ref={containerRef} className="mt-6 md:mt-8 bg-white border border-dark/10 shadow-xl rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 h-40 md:h-48 relative overflow-hidden select-none">
            <div className="flex justify-between items-center mb-4 md:mb-6">
                <h4 className="font-bold text-dark text-sm md:text-base flex items-center gap-1.5 md:gap-2"><Calendar size={16} className="md:size-[18px]" /> Workflow</h4>
                <div className="text-[10px] font-data bg-accent/20 text-accent px-2 rounded-full font-bold">10u winst</div>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => (
                    <div
                        key={i}
                        ref={i === 3 ? dayRef : null}
                        className={`aspect-square rounded-lg md:rounded-xl flex items-center justify-center text-[10px] md:text-sm font-medium transition-colors duration-300 ${activeDay === i ? 'bg-accent text-primary scale-110 shadow-md z-10' : 'bg-background text-dark/40'}`}
                    >
                        {d}
                    </div>
                ))}
            </div>

            <div className="mt-4 md:mt-6 flex justify-end">
                <div ref={buttonRef} className="bg-primary text-white text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold">
                    Opslaan
                </div>
            </div>

            {/* Fake Cursor */}
            <div ref={cursorRef} className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-xl" style={{ width: '20px', height: '20px' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.79 6.75 21.36L11.44 17.1C11.66 16.9 11.95 16.8 12.24 16.8H18.5C19.16 16.8 19.5 16.03 19.06 15.55L6.46 2.31C6.01 1.84 5.5 2.16 5.5 3.21Z" fill="#1E293B" stroke="white" strokeWidth="1.5" />
                </svg>
            </div>
        </div >
    );
};

const Features = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="ai-teams" ref={sectionRef} className="py-20 md:py-32 px-6 md:px-16 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-14 md:mb-20 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">Jouw bedrijf,<br />maar dan efficiënter.</h2>
                    <p className="text-dark/60 max-w-2xl text-base md:text-lg text-balance">
                        Geen tijdelijke pleisters of wéér een nieuw systeem om aan te leren. Ik bouw een slimme, onzichtbare motor achter je bedrijf die het tijdrovende, dagelijkse werk écht van je overneemt.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="feature-card bg-white/50 rounded-[2rem] p-2 flex flex-col">
                        <div className="bg-white rounded-[1.75rem] p-8 h-full border border-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <h3 className="text-xl font-bold text-primary mb-3">Meer focus<br />en groei</h3>
                            <p className="text-dark/60 text-sm leading-relaxed text-balance">
                                Laat de techniek het terugkerend werk voor je uitvoeren. Jij houdt de regie en het overzicht, terwijl de software het voor je oplost.
                            </p>
                            <DiagnosticShuffler />
                        </div>
                    </div>

                    <div className="feature-card bg-white/50 rounded-[2rem] p-2 flex flex-col">
                        <div className="bg-white rounded-[1.75rem] p-8 h-full border border-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <h3 className="text-xl font-bold text-primary mb-3">100% Foutloos<br />verwerkt</h3>
                            <p className="text-dark/60 text-sm leading-relaxed text-balance">
                                Automatisering die non-stop voor je doordraait en data direct foutloos verwerkt in de systemen die je nu al gebruikt.
                            </p>
                            <TelemetryTypewriter />
                        </div>
                    </div>

                    <div className="feature-card bg-white/50 rounded-[2rem] p-2 flex flex-col">
                        <div className="bg-white rounded-[1.75rem] p-8 h-full border border-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <h3 className="text-xl font-bold text-primary mb-3">Rust in je<br />operatie</h3>
                            <p className="text-dark/60 text-sm leading-relaxed text-balance">
                                Klaar met de dagelijkse chaos. Minder oplossen, minder vertraging en meer tijd voor je klanten.
                            </p>
                            <CursorProtocolScheduler />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- Philosophy Component ---

const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.phil-word', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: 'power4.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const text1 = "Waar losse software vaak zorgt voor extra werk,".split(" ");
    const text2 = "bouw ik een AI-team dat jou directe ".split(" ");

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 px-6 md:px-16 bg-primary overflow-hidden text-white flex items-center justify-center">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/AI_foto_systemen.png"
                    alt="Systemen netwerk"
                    className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
                    data-speed="0.8"
                />
                <div className="absolute inset-0 bg-primary/80"></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
                <p className="text-white/60 text-lg md:text-2xl font-medium max-w-2xl mb-12 leading-relaxed">
                    {text1.map((word, i) => (
                        <span key={i} className="phil-word inline-block mr-2">{word}</span>
                    ))}
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-drama italic text-white leading-tight">
                    {text2.map((word, i) => (
                        <span key={i} className="phil-word inline-block mr-3">{word}</span>
                    ))}
                    <span className="phil-word inline-block text-accent">tijdswinst en controle geeft.</span>
                </h2>
            </div>
        </section>
    );
};

// --- Protocol Component ---

const Protocol = () => {
    const containerRef = useRef(null);

    const steps = [
        {
            num: "01",
            title: "Knelpunten aanpakken",
            desc: "Ik kijk samen met jou waar jij de meeste uren verliest aan onnodig handwerk. Ik pak precies díe processen aan die jou direct de meeste tijdswinst en rust opleveren.",
            Visual: () => (
                <div className="w-full h-full flex items-center justify-center bg-primary rounded-3xl">
                    <CoreSpinLoader />
                </div>
            )
        },
        {
            num: "02",
            title: "Werken met wat je al hebt",
            desc: "Je hoeft geen nieuwe software te leren. Mijn oplossingen werken onzichtbaar samen met jouw huidige CRM en systemen. Je vertrouwde werkwijze blijft, maar de vertraging verdwijnt.",
            Visual: () => (
                <div className="w-full h-full flex items-center justify-center bg-primary rounded-3xl">
                    <RadialPulseLoader />
                </div>
            )
        },
        {
            num: "03",
            title: "Groeien zonder extra personeel",
            desc: "Je processen draaien voortaan soepel door, ongeacht hoe druk het wordt. Zo kan je bedrijf moeiteloos groeien, zonder dat je direct nieuwe mensen hoeft aan te nemen.",
            Visual: () => (
                <div className="w-full h-full flex items-center justify-center bg-primary rounded-3xl overflow-hidden relative">
                    <NeuralBackground color="#3B82F6" speed={0.8} />
                </div>
            )
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    end: () => `+=${window.innerHeight}`,
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="werkwijze" className="bg-background relative">
            {steps.map((step, i) => (
                <div key={i} className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-16">
                    <div className="absolute inset-0 bg-background"></div>

                    <div className="relative z-10 w-full max-w-6xl h-full max-h-[85vh] md:max-h-[70vh] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-dark/5 flex flex-col md:flex-row overflow-hidden origin-top"
                        style={{
                            zIndex: i + 1
                        }}>

                        <div className="flex-1 p-8 sm:p-10 md:p-20 flex flex-col justify-center">
                            <span className="font-data text-accent text-sm md:text-xl mb-3 md:mb-4 py-1 px-3 bg-accent/10 rounded-full w-fit">_{step.num}</span>
                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading text-primary tracking-tight mb-4 md:mb-6 leading-tight">
                                {step.title}.
                            </h3>
                            <p className="text-dark/60 text-base md:text-xl max-w-md text-balance leading-relaxed">
                                {step.desc}
                            </p>
                        </div>

                        <div className="w-full md:w-[45%] h-48 sm:h-64 md:h-auto bg-ivory/30 border-t md:border-t-0 md:border-l border-dark/5 p-6 md:p-8 relative flex items-center justify-center">
                            <step.Visual />
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
};

// --- CTA Component ---

const CTA = () => {
    return (
        <section id="start" className="py-24 md:py-32 px-6 bg-background relative z-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Strategische Route */}
                <div className="bg-primary text-white rounded-[3rem] p-10 md:p-16 flex flex-col items-start justify-between relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors"></div>
                    <div className="relative z-10 mb-12">
                        <h3 className="text-3xl font-bold mb-4">Laten we de ruis wegnemen</h3>
                        <p className="text-white/60 text-balance leading-relaxed">
                            Laten we samen kijken hoeveel uren ik wekelijks voor je kan vrijmaken. Plan een korte, vrijblijvende kennismaking in en ontdek je mogelijkheden.
                        </p>
                    </div>
                    <a href="https://calendly.com/inovisionn/30min" target="_blank" rel="noopener noreferrer" className="btn-magnetic bg-accent text-primary px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 group-hover:scale-105 relative z-10">
                        Plan een kennismaking <ArrowRight size={18} />
                    </a>
                </div>

                {/* Directe Bewijsvoering */}
                <div className="bg-white border border-dark/5 shadow-xl rounded-[3rem] p-10 md:p-16 flex flex-col items-start justify-between group">
                    <div className="mb-12">
                        <h3 className="text-3xl font-bold mb-4 text-primary">Test de workflow</h3>
                        <p className="text-dark/60 text-balance leading-relaxed">
                            Ontvang binnen 5 minuten een gekwalificeerde leadlijst. Eén simpel proces, als voorproefje op een volledig geautomatiseerde backoffice.
                        </p>
                    </div>
                    <Link to="/lead-scanner" className="btn-magnetic bg-primary text-white px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 group-hover:scale-105">
                        Start de live demo <Terminal size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

const ContactSection = () => {
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            data.form_type = 'contact';

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            setStatus('success');
        } catch (error) {
            console.error("Fout bij verzenden: ", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-primary text-white border-t border-white/5 relative z-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Contact.</h2>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">
                        Heb je een specifieke uitdaging of wil je weten welke agents voor jou kunnen werken? Stuur mij een bericht.
                    </p>
                </div>

                {status === 'error' ? (
                    <div className="bg-red-500/10 p-8 md:p-12 rounded-[2rem] border border-red-500/30 shadow-2xl text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Er ging iets mis.</h3>
                        <p className="text-white/60">Je bericht kon niet worden verzonden. Probeer het opnieuw of mail rechtstreeks naar <a href="mailto:inovisionn@hotmail.com" className="text-accent underline">inovisionn@hotmail.com</a>.</p>
                        <button onClick={() => setStatus('idle')} className="mt-8 text-sm text-accent hover:text-white transition-colors">Opnieuw proberen</button>
                    </div>
                ) : status === 'success' ? (
                    <div className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl text-center">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={32} className="text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Bericht verzonden!</h3>
                        <p className="text-white/60">Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.</p>
                        <button onClick={() => setStatus('idle')} className="mt-8 text-sm text-accent hover:text-white transition-colors">Start nieuw bericht</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="bedrijfsnaam" className="text-sm font-medium text-white/80">Bedrijfsnaam</label>
                                <input
                                    required
                                    type="text"
                                    id="bedrijfsnaam"
                                    name="bedrijfsnaam"
                                    placeholder="Uw bedrijf"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="naam" className="text-sm font-medium text-white/80">Naam</label>
                                <input
                                    required
                                    type="text"
                                    id="naam"
                                    name="naam"
                                    placeholder="Uw naam"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/80">E-mail</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="uwnaam@bedrijf.nl"
                                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="vraag" className="text-sm font-medium text-white/80">Vraag</label>
                            <textarea
                                required
                                id="vraag"
                                name="vraag"
                                rows="4"
                                placeholder="Waar kunnen we u mee helpen?"
                                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full md:w-auto btn-magnetic bg-accent text-primary px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 relative z-10 ${status === 'loading' ? 'opacity-70 cursor-wait' : 'hover:scale-105'}`}
                        >
                            {status === 'loading' ? 'Verzenden...' : 'Verstuur bericht'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

// --- Footer Component ---

const Footer = () => {
    return (
        <footer className="bg-primary text-white px-6 py-12 md:py-20 relative z-30 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
                <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">inovisionn</h2>
                    <p className="text-white/50 text-sm max-w-xs leading-relaxed text-balance">
                        Maakt een einde aan onnodig handwerk, zodat jij weer kunt ondernemen.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold mb-2">Volg mij op:</h4>
                    <a href="https://www.linkedin.com/in/niels-heijman/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-2">
                        <Linkedin size={16} /> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/niels.heijman/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-2">
                        <Instagram size={16} /> Instagram
                    </a>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold mb-2">Informatie:</h4>
                    <a href="mailto:inovisionn@hotmail.com" className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-2"><Mail size={16} /> inovisionn@hotmail.com</a>
                    <span className="text-white/50 text-sm flex items-center gap-2"><Phone size={16} /> +31 6 15088920</span>
                    <span className="text-white/50 text-sm flex items-center gap-2"><MapPin size={16} /> Roermond</span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <p className="text-white/40 text-xs font-data">
                        &copy; 2026 Inovisionn. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-white/40 text-xs font-data">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
                        <Link to="/voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-data text-white/70">System Operational</span>
                </div>
            </div>
        </footer>
    );
};

// --- Legal Components ---

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const LegalLayout = ({ title, children }) => {
    return (
        <div className="min-h-screen bg-background text-dark font-heading selection:bg-accent selection:text-primary relative overflow-hidden">
            <div className="noise-overlay"></div>
            <Navbar />

            <div className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-accent transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Terug naar Home
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-12 leading-tight">
                        {title}<span className="text-accent">.</span>
                    </h1>

                    <div className="bg-white/50 backdrop-blur-sm border border-dark/5 rounded-[2rem] p-8 md:p-12 shadow-xl prose prose-slate max-w-none text-dark/80 leading-relaxed font-sans">
                        {children}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const PrivacyPolicy = () => {
    return (
        <LegalLayout title="Privacyverklaring">
            <h2 className="text-2xl font-bold text-primary mb-4">Laatste update: 02 maart 2026</h2>
            <p className="mb-6">Inovisionn respecteert uw privacy en zorgt ervoor dat de persoonlijke informatie die u ons verstrekt vertrouwelijk en zorgvuldig wordt behandeld. In deze verklaring leggen wij uit hoe wij uw gegevens verzamelen, gebruiken en beschermen, specifiek in de context van onze AI-dienstverlening.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">1. Wanneer is deze privacyverklaring van toepassing?</h3>
            <p className="mb-4">Deze verklaring is van toepassing op alle persoonsgegevens die Inovisionn verwerkt van iedereen die contact heeft (gehad) met Inovisionn, zoals bezoekers van onze website (https://www.inovisionn.com/), klanten, en zakelijke contactpersonen.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">2. Wie is de verwerkingsverantwoordelijke?</h3>
            <p className="mb-4">Inovisionn is de verantwoordelijke voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Bedrijfsnaam:</strong> Inovisionn</li>
                <li><strong>Adres:</strong> Abdis Susannastraat 15, 6041VK Roermond</li>
                <li><strong>KvK-nummer:</strong> 91930391</li>
                <li><strong>Contactpersoon:</strong> Niels Heijman</li>
                <li><strong>E-mailadres:</strong> inovisionn@hotmail.com</li>
            </ul>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">3. Van wie verwerken wij gegevens?</h3>
            <p className="mb-4">Wij verwerken persoonsgegevens van bezoekers van onze website, (potentiële) klanten die onze AI-diensten afnemen, en contactpersonen bij leveranciers of partners.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">4. Welke gegevens verwerken wij?</h3>
            <p className="mb-4">Wij verwerken gegevens zoals contactgegevens (naam, e-mail, telefoon), betaalgegevens, technische data voor AI-workflows, en interactiegegevens uit gesprekken.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">5. Grondslagen en doelen van de verwerking</h3>
            <p className="mb-4">Wij verwerken uw gegevens voor de uitvoering van overeenkomsten, om te voldoen aan wettelijke verplichtingen (zoals de fiscale bewaarplicht), en op basis van gerechtvaardigd belang voor marketing en verbetering.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">6. Specifieke bepalingen voor AI-Dienstverlening</h3>
            <p className="mb-4"><strong>6.1 Transparantie (EU AI Act):</strong> Wij informeren u dat onze diensten AI-systemen gebruiken. U bent als operator verantwoordelijk om uw eindgebruikers hierover te informeren.</p>
            <p className="mb-4"><strong>6.2 Gegevensgebruik en Training:</strong> Wij garanderen dat data via zakelijke API's niet wordt gebruikt voor het trainen van publieke modellen.</p>
            <p className="mb-4"><strong>6.3 Privacy by Design:</strong> Wij minimaliseren de verzending van gevoelige gegevens naar externe modellen.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">7. Bewaartermijnen</h3>
            <p className="mb-4">Klantdossiers worden tot 2 jaar na beëindiging bewaard, administratieve gegevens 7 jaar conform de wet.</p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">8. Delen met derden</h3>
            <p className="mb-4">Wij verkopen uw gegevens nooit. Gegevens worden alleen gedeeld met noodzakelijke sub-verwerkers onder strikte verwerkersovereenkomsten.</p>

            <p className="mt-12 text-sm italic">Voor een volledige versie of specifieke vragen kunt u contact opnemen via inovisionn@hotmail.com.</p>
        </LegalLayout>
    );
};

const TermsOfService = () => {
    return (
        <LegalLayout title="Algemene Voorwaarden">
            <h2 className="text-2xl font-bold text-primary mb-4">Artikel 1 - Definities</h2>
            <p className="mb-4">Inovisionn, gevestigd te Roermond, KvK 91930391. Klant: de (rechts)persoon die een overeenkomst aangaat met Inovisionn.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 2 - Toepasselijkheid</h2>
            <p className="mb-4">Deze voorwaarden gelden voor alle offertes, werkzaamheden en overeenkomsten van Inovisionn.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 3 - Aanbiedingen en offertes</h2>
            <p className="mb-4">Offertes zijn vrijblijvend en maximaal 2 weken geldig.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 5 - Prijzen</h2>
            <p className="mb-4">Prijzen zijn in euro, exclusief btw. Inovisionn mag prijzen aanpassen (max 10% per jaar).</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 6 - Betalingen</h2>
            <p className="mb-4">1. Aanbetaling tot 50% kan worden verlangd. 2. Betalingstermijn is 30 dagen na factuurdatum. 3. Bij overschrijding is de Klant direct in verzuim.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 13 - Garantie</h2>
            <p className="mb-4">De overeenkomst bevat slechts een inspanningsverplichting. Inovisionn garandeert niet dat AI-output altijd 100% accuraat is.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 14 - Uitvoering</h2>
            <p className="mb-4">1. Inovisionn voert werk naar beste inzicht uit. 2. Klant gebruikt de workflows uitsluitend voor legale doeleinden en conform Service Terms van AI-providers.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 18 - Intellectueel eigendom</h2>
            <p className="mb-4">1. Inovisionn behoudt rechten op de onderliggende methodiek (prompts, scripts, workflows). 2. Klant verkrijgt gebruiksrechten op de specifieke Output na volledige betaling.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 19 - Geheimhouding</h2>
            <p className="mb-4">Partijen houden vertrouwelijke informatie geheim tijdens en tot 3 jaar na de overeenkomst.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 25 - Aansprakelijkheid</h2>
            <p className="mb-4">Aansprakelijkheid is beperkt tot het factuurbedrag. Indirecte schade is uitgesloten.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 28 - Overmacht</h2>
            <p className="mb-4">Inovisionn is niet aansprakelijk bij storingen van AI-providers of wijzigingen in API-voorwaarden.</p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Artikel 33 - Toepasselijk recht</h2>
            <p className="mb-4">Nederlands recht is van toepassing. De rechter te Roermond is exclusief bevoegd.</p>
        </LegalLayout>
    );
};

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lead-scanner" element={<LeadScanner />} />
                <Route path="/forbidden" element={<Forbidden />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/voorwaarden" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
