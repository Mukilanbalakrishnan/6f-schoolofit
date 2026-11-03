import { useEffect } from 'react';

let activeLockCount = 0;
let originalHtmlOverflow = '';
let originalBodyOverflow = '';
let originalHtmlOverflowY = '';
let originalBodyOverflowY = '';
let originalBodyPaddingRight = '';

/**
 * Robust scroll locking helper that completely disables background scrolling
 * across all browsers, mobile touch devices, and desktop OS viewports.
 */
export function lockScroll(): void {
  if (typeof document === 'undefined') return;

  if (activeLockCount === 0) {
    const html = document.documentElement;
    const body = document.body;

    // Save previous inline styles
    originalHtmlOverflow = html.style.overflow;
    originalBodyOverflow = body.style.overflow;
    originalHtmlOverflowY = html.style.overflowY;
    originalBodyOverflowY = body.style.overflowY;
    originalBodyPaddingRight = body.style.paddingRight;

    // Prevent layout shift on Windows/desktop when vertical scrollbar hides
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // Apply strict overflow and overscroll locks on both HTML and BODY
    html.classList.add('modal-open');
    body.classList.add('modal-open');
    html.style.overflow = 'hidden';
    html.style.overflowY = 'hidden';
    body.style.overflow = 'hidden';
    body.style.overflowY = 'hidden';
  }

  activeLockCount++;
}

export function unlockScroll(): void {
  if (typeof document === 'undefined') return;

  activeLockCount = Math.max(0, activeLockCount - 1);

  if (activeLockCount === 0) {
    const html = document.documentElement;
    const body = document.body;

    html.classList.remove('modal-open');
    body.classList.remove('modal-open');
    html.style.overflow = originalHtmlOverflow;
    html.style.overflowY = originalHtmlOverflowY;
    body.style.overflow = originalBodyOverflow;
    body.style.overflowY = originalBodyOverflowY;
    body.style.paddingRight = originalBodyPaddingRight;
  }
}

/**
 * React hook to lock the entire background document scroll while a modal/popup is open.
 * Automatically cleans up on unmount or when `isLocked` becomes false.
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    lockScroll();

    return () => {
      unlockScroll();
    };
  }, [isLocked]);
}

