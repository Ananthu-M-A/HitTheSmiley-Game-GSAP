import { MouseEvent, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface SmileyProps {
    holeNum: number;
    molePosition: number | null;
}

const Smiley = ({ holeNum, molePosition }: SmileyProps) => {
    const moleRef = useRef<HTMLDivElement>(null);
    const smileyRef = useRef<HTMLDivElement>(null);
    const [showSmile, setShowSmile] = useState(true);
    const [showShaking, setShowShaking] = useState(false);

    useEffect(() => {
        if (molePosition === holeNum && moleRef.current) {
            setShowShaking(false);
            setShowSmile(true);
            gsap.fromTo(moleRef.current, { scale: 0, y: 50 }, { scale: 1, y: 0, duration: 0.3, ease: "bounce.out" });
            const timer = setTimeout(() => {
                gsap.to(moleRef.current, { scale: 0, y: 50, duration: 0.3 });
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [molePosition, holeNum]);

    const hitSmiley = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (molePosition === holeNum) {
            setShowSmile(false);
            setShowShaking(true);
            gsap.to(smileyRef.current, {
                duration: 1,
                scale: 1.2,
                rotate: 360,
                repeat: 3,
                ease: "elastic.out(1, 0.3)",
                onComplete: () => {
                    setTimeout(() => {
                        setShowShaking(false);
                        setShowSmile(true);
                    }, 1000);
                },
            });
        }
    };

    return (
        <div ref={moleRef} id={`mole-${holeNum}`} className='h-10'>
            {molePosition === holeNum && (
                <>
                    {showSmile && (
                        <div ref={smileyRef} onClickCapture={hitSmiley} className="text-4xl cursor-pointer">
                            <img src="/smile.gif" alt="Smiley" className="w-12 h-12 mx-auto" />
                        </div>
                    )}
                    {showShaking && (
                        <div className="text-4xl">
                            <img src="/shaking.gif" alt="Shaking Smiley" className="w-12 h-12 mx-auto" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Smiley;
