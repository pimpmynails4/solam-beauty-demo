import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Circular Logo Emblem SVG */}
      <div className={`relative shrink-0 ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-sm select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3C4" />
              <stop offset="25%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F3E5AB" />
              <stop offset="75%" stopColor="#B08D22" />
              <stop offset="100%" stopColor="#7A5C10" />
            </linearGradient>

            <linearGradient id="goldShineNav" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#B08D22" />
              <stop offset="35%" stopColor="#FFE89E" />
              <stop offset="50%" stopColor="#FFF9E6" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6D1C" />
            </linearGradient>

            <radialGradient id="glitterNav" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="40%" stopColor="#E5C158" />
              <stop offset="70%" stopColor="#B08D22" />
              <stop offset="100%" stopColor="#8A6D1C" />
            </radialGradient>
          </defs>

          {/* Outer Ring & Circle Base */}
          <circle cx="250" cy="250" r="236" fill="none" stroke="url(#goldGradNav)" strokeWidth="3" opacity="0.9" />
          <circle cx="250" cy="250" r="232" fill="#FAF6F0" fillOpacity="0.45" />

          {/* Sparkles */}
          <g fill="url(#goldShineNav)">
            <path d="M 80 235 Q 85 235 85 230 Q 85 235 90 235 Q 85 235 85 240 Q 85 235 80 235 Z" transform="scale(1.3) translate(-25,-55)" />
            <path d="M 370 145 Q 375 145 375 140 Q 375 145 380 145 Q 375 145 375 150 Q 375 145 370 145 Z" transform="scale(1.4) translate(-110,-35)" />
            <path d="M 410 215 Q 415 215 415 210 Q 415 215 420 215 Q 415 215 415 220 Q 415 215 410 215 Z" transform="scale(1.4) translate(-120,-50)" />
          </g>

          {/* Polish Bottle (Left) */}
          <g transform="translate(105, 150) rotate(-18)">
            <rect x="20" y="5" width="13" height="32" rx="3" fill="url(#goldShineNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            <rect x="18" y="35" width="17" height="4" rx="1" fill="url(#goldGradNav)" />
            <path d="M 12 39 C 12 39, 8 50, 8 70 C 8 80, 14 85, 27 85 C 40 85, 46 80, 46 70 C 46 50, 42 39, 42 39 Z" fill="url(#goldShineNav)" stroke="#8A6D1C" strokeWidth="1.2" />
          </g>

          {/* Cream Jar (Right) */}
          <g transform="translate(325, 160) rotate(12)">
            <ellipse cx="38" cy="18" rx="36" ry="13" fill="url(#goldShineNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            <path d="M 2 18 L 2 28 C 2 36, 17 42, 38 42 C 59 42, 74 36, 74 28 L 74 18 Z" fill="url(#goldGradNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            <path d="M 6 34 L 6 50 C 6 60, 19 65, 38 65 C 57 65, 70 60, 70 50 L 70 34 Z" fill="url(#goldShineNav)" stroke="#8A6D1C" strokeWidth="1.2" />
          </g>

          {/* 5 Golden Nails */}
          <g>
            {/* Thumb */}
            <path d="M 167 205 C 164 175, 164 150, 174 133 C 179 123, 190 123, 195 133 C 204 150, 204 175, 202 205 Z" fill="url(#goldGradNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            {/* Index */}
            <path d="M 207 200 C 204 165, 204 130, 215 112 C 220 104, 231 104, 236 112 C 246 130, 246 165, 243 200 Z" fill="url(#goldGradNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            {/* Middle (Glitter Gold) */}
            <path d="M 252 200 C 249 160, 249 120, 260 100 C 265 92, 277 92, 282 100 C 293 120, 293 160, 290 200 Z" fill="url(#glitterNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            {/* Ring */}
            <path d="M 300 200 C 297 165, 297 132, 308 116 C 313 108, 324 108, 329 116 C 339 132, 339 165, 336 200 Z" fill="url(#goldGradNav)" stroke="#8A6D1C" strokeWidth="1.2" />
            {/* Pinky */}
            <path d="M 340 205 C 337 175, 337 155, 346 141 C 351 132, 361 132, 366 141 C 374 155, 374 175, 372 205 Z" fill="url(#goldGradNav)" stroke="#8A6D1C" strokeWidth="1.2" />
          </g>

          {/* Typography "Pimp My Nails" */}
          <g textAnchor="middle">
            <text x="250" y="248" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontStyle="italic" fontSize="76" fill="#43281C" opacity="0.3">Pimp</text>
            <text x="250" y="246" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontStyle="italic" fontSize="76" fill="url(#goldGradNav)" stroke="#8A6D1C" strokeWidth="1.2">Pimp</text>

            <text x="249" y="286" fontFamily="'Playfair Display', cursive" fontStyle="italic" fontSize="42" fill="#43281C" opacity="0.3">my</text>
            <text x="248" y="284" fontFamily="'Playfair Display', cursive" fontStyle="italic" fontSize="42" fill="url(#goldShineNav)" stroke="#8A6D1C" strokeWidth="0.8">my</text>

            <text x="250" y="362" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontStyle="italic" fontSize="92" fill="#43281C" opacity="0.3">Nails</text>
            <text x="250" y="358" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontStyle="italic" fontSize="92" fill="url(#goldGradNav)" stroke="#7A5C10" strokeWidth="1.5">Nails</text>

            {/* Gold Flourish Line */}
            <path d="M 115 315 C 95 335, 95 348, 120 352 C 160 358, 200 335, 245 365 C 295 400, 370 385, 395 345 C 400 335, 385 338, 365 350 C 320 375, 250 375, 215 352 C 180 332, 135 335, 120 322 Z" fill="url(#goldShineNav)" />

            {/* By Solam Beauty */}
            <text x="250" y="420" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="600" fontStyle="italic" fontSize="27" fill="url(#goldGradNav)" letterSpacing="2.5">By Solam Beauty</text>
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left rtl:text-right">
          <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#43281C] uppercase leading-none">
            Solam Beauty
          </span>
          <span className="text-[11px] sm:text-xs font-medium tracking-widest text-[#B08D22] uppercase">
            Pimp My Nails
          </span>
        </div>
      )}
    </div>
  );
};
