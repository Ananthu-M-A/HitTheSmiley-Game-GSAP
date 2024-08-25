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
            gsap.fromTo(moleRef.current, { scale: 0 }, { scale: 1, duration: 0.3 });
            const timer = setTimeout(() => {
                gsap.to(moleRef.current, { scale: 0, duration: 0.3 });
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
                duration: 10,
                scale: 4,
                onComplete: () => {
                    setTimeout(() => {
                        setShowShaking(false);
                    }, 10000);
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
                            <img src="/smile.gif" alt="Smiley" />
                        </div>
                    )}
                    {showShaking && (
                        <div className="text-4xl">
                            <img src="/shaking.gif" alt="Shaking Smiley" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Smiley;
