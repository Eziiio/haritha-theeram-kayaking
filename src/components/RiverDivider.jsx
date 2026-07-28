import React from 'react';

/**
 * The site's one signature visual element: a single winding line
 * standing in for Arival Thoodu, the waterway the whole business
 * is built around. Used sparingly — as a divider under eyebrow
 * labels and section headers, never as generic decoration.
 */
export default function RiverDivider({ className = 'text-gold-500', animate = true }) {
    return (
        <svg
            viewBox="0 0 140 18"
            className={`river-divider ${animate ? 'river-draw' : ''} ${className}`}
            aria-hidden="true"
        >
            <path d="M2 9 C 25 -2, 40 20, 65 9 S 110 -2, 138 9" />
        </svg>
    );
}
